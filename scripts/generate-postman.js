const fs = require('fs');
const path = require('path');
const { NestFactory } = require('@nestjs/core');
const { SwaggerModule, DocumentBuilder } = require('@nestjs/swagger');
const { v4: uuidv4 } = require('uuid');

function generateSampleFromSchema(schema, components) {
  if (!schema) return {};

  if (schema.$ref) {
    const refName = schema.$ref.replace('#/components/schemas/', '');
    if (components && components.schemas && components.schemas[refName]) {
      return generateSampleFromSchema(components.schemas[refName], components);
    }
    return {};
  }

  if (schema.example !== undefined) {
    return schema.example;
  }

  if (schema.default !== undefined) {
    return schema.default;
  }

  if (schema.enum && schema.enum.length > 0) {
    return schema.enum[0];
  }

  switch (schema.type) {
    case 'string':
      if (schema.format === 'date-time' || schema.format === 'dateTime') return '2026-08-31T09:00:00.000Z';
      if (schema.format === 'date') return '2026-08-31';
      if (schema.format === 'email') return 'delegate@example.com';
      if (schema.format === 'uuid') return '123e4567-e89b-12d3-a456-426614174000';
      if (schema.format === 'uri') return 'https://example.com/image.webp';
      return '<string>';
    case 'number':
    case 'integer':
      return schema.default !== undefined ? schema.default : (schema.minimum !== undefined ? schema.minimum : 1);
    case 'boolean':
      return schema.default !== undefined ? schema.default : false;
    case 'array':
      if (schema.items) {
        return [generateSampleFromSchema(schema.items, components)];
      }
      return [];
    case 'object':
      const obj = {};
      if (schema.properties) {
        for (const [key, prop] of Object.entries(schema.properties)) {
          obj[key] = generateSampleFromSchema(prop, components);
        }
      }
      return obj;
    default:
      if (schema.properties) {
        const o = {};
        for (const [key, prop] of Object.entries(schema.properties)) {
          o[key] = generateSampleFromSchema(prop, components);
        }
        return o;
      }
      return {};
  }
}

async function generatePostmanCollection() {
  const { AppModule } = require('../dist/src/app.module');
  const app = await NestFactory.create(AppModule, { logger: false });

  const config = new DocumentBuilder()
    .setTitle('HAPUA Event Management System API')
    .setDescription('The API documentation for the HAPUA Event Management System backend.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  await app.close();

  const collection = {
    info: {
      _postman_id: uuidv4(),
      name: 'HAPUA Event Management System API',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
      description: {
        content: 'The API documentation for the HAPUA Event Management System backend.',
        type: 'text/plain',
      },
    },
    item: [
      {
        name: 'api',
        description: '',
        item: [
          {
            name: 'v1',
            description: '',
            item: [],
          },
        ],
      },
    ],
    variable: [
      {
        key: 'baseUrl',
        value: 'http://localhost:3000',
        type: 'string',
      },
      {
        key: 'bearerToken',
        value: '',
        type: 'string',
      },
    ],
  };

  const v1Item = collection.item[0].item[0];

  function getOrCreateFolder(parent, folderName) {
    let folder = parent.item.find((i) => i.name === folderName && i.item !== undefined);
    if (!folder) {
      folder = {
        name: folderName,
        description: '',
        item: [],
      };
      parent.item.push(folder);
    }
    return folder;
  }

  // Iterate over paths in OpenAPI document
  for (const [apiPath, pathObj] of Object.entries(document.paths)) {
    // e.g. apiPath: /admin/hotels/{id}/images
    const cleanPath = apiPath.startsWith('/') ? apiPath.slice(1) : apiPath;
    const pathSegments = cleanPath.split('/');

    for (const [httpMethod, op] of Object.entries(pathObj)) {
      if (['parameters', '$ref'].includes(httpMethod)) continue;

      const method = httpMethod.toUpperCase();
      const operationId = op.operationId || `${method}_${cleanPath}`;
      const summary = op.summary || operationId;
      const description = op.description || '';

      // Determine folder hierarchy from path
      // e.g. pathSegments: ['admin', 'hotels', '{id}', 'images']
      // Group logically:
      let currentFolder = v1Item;
      const folderSegments = pathSegments.slice(0, pathSegments.length > 1 && !pathSegments[pathSegments.length - 1].startsWith('{') ? pathSegments.length - 1 : pathSegments.length);

      for (let i = 0; i < folderSegments.length; i++) {
        const seg = folderSegments[i];
        currentFolder = getOrCreateFolder(currentFolder, seg);
      }

      // Convert path segments to Postman path (e.g. {id} -> :id)
      const postmanPathSegments = ['api', 'v1', ...pathSegments.map((s) => (s.startsWith('{') && s.endsWith('}') ? `:${s.slice(1, -1)}` : s))];

      // Extract query parameters and path variables
      const queryParams = [];
      const pathVariables = [];

      const allParams = [...(pathObj.parameters || []), ...(op.parameters || [])];
      for (const param of allParams) {
        if (param.in === 'query') {
          let exampleVal = '';
          if (param.schema) {
            if (param.schema.default !== undefined) exampleVal = String(param.schema.default);
            else if (param.schema.example !== undefined) exampleVal = String(param.schema.example);
            else if (param.schema.type === 'number') exampleVal = '1';
            else if (param.schema.type === 'string') exampleVal = '<string>';
          }
          queryParams.push({
            key: param.name,
            value: exampleVal,
            disabled: !param.required,
            description: {
              content: param.description || (param.schema?.enum ? `Allowed: ${param.schema.enum.join(', ')}` : ''),
              type: 'text/plain',
            },
          });
        } else if (param.in === 'path') {
          pathVariables.push({
            key: param.name,
            value: `:${param.name}`,
            disabled: false,
            description: {
              content: param.description || `(Required) ${param.name}`,
              type: 'text/plain',
            },
          });
        }
      }

      // Headers & Auth
      const headers = [];
      let auth = null;

      const hasBearerSecurity = op.security && op.security.some((sec) => 'bearer' in sec);
      if (hasBearerSecurity) {
        auth = {
          type: 'bearer',
          bearer: [
            {
              key: 'token',
              value: '{{bearerToken}}',
            },
          ],
        };
      }

      // Body Handling
      let body = {};
      if (op.requestBody && op.requestBody.content) {
        if (op.requestBody.content['multipart/form-data']) {
          headers.push({
            key: 'Content-Type',
            value: 'multipart/form-data',
          });
          const schema = op.requestBody.content['multipart/form-data'].schema;
          const formdata = [];
          if (schema && schema.properties) {
            for (const [propName, propDef] of Object.entries(schema.properties)) {
              const isBinary = propDef.format === 'binary' || (propDef.items && propDef.items.format === 'binary');
              if (isBinary) {
                formdata.push({
                  key: propName,
                  type: 'file',
                  src: [],
                  description: propDef.description || `${propName} file upload`,
                });
              } else {
                let sampleVal = '';
                if (propDef.example !== undefined) sampleVal = typeof propDef.example === 'object' ? JSON.stringify(propDef.example) : String(propDef.example);
                else if (propDef.default !== undefined) sampleVal = String(propDef.default);
                else if (propDef.type === 'array') sampleVal = '[]';
                else if (propDef.type === 'number') sampleVal = '0';
                else if (propDef.type === 'boolean') sampleVal = 'false';
                else sampleVal = '<string>';

                formdata.push({
                  key: propName,
                  value: sampleVal,
                  type: 'text',
                  description: propDef.description || '',
                });
              }
            }
          }
          body = {
            mode: 'formdata',
            formdata,
          };
        } else if (op.requestBody.content['application/json']) {
          headers.push({
            key: 'Content-Type',
            value: 'application/json',
          });
          const schema = op.requestBody.content['application/json'].schema;
          const sample = generateSampleFromSchema(schema, document.components);
          body = {
            mode: 'raw',
            raw: JSON.stringify(sample, null, 2),
            options: {
              raw: {
                language: 'json',
                headerFamily: 'json',
              },
            },
          };
        }
      }

      if (method === 'GET') {
        headers.push({
          key: 'Accept',
          value: 'application/json',
        });
      }

      // Create responses
      const responses = [];
      if (op.responses) {
        for (const [code, resp] of Object.entries(op.responses)) {
          responses.push({
            id: uuidv4(),
            name: code,
            status: code === '200' ? 'OK' : code === '201' ? 'Created' : 'Response',
            code: parseInt(code, 10) || 200,
            header: [{ key: 'Content-Type', value: 'application/json' }],
            body: '{}',
            cookie: [],
            _postman_previewlanguage: 'json',
            originalRequest: {
              url: {
                path: postmanPathSegments,
                host: ['{{baseUrl}}'],
                query: queryParams,
                variable: pathVariables,
              },
              header: headers,
              method,
              body,
            },
          });
        }
      }

      const postmanItem = {
        id: uuidv4(),
        name: summary,
        request: {
          name: summary,
          description: {
            content: description,
            type: 'text/plain',
          },
          url: {
            path: postmanPathSegments,
            host: ['{{baseUrl}}'],
            query: queryParams,
            variable: pathVariables,
          },
          header: headers,
          method,
          body,
          auth,
        },
        response: responses,
        event: [],
        protocolProfileBehavior: {
          disableBodyPruning: true,
        },
      };

      currentFolder.item.push(postmanItem);
    }
  }

  const outputPath = path.resolve(__dirname, '..', 'postman_collection.json');
  fs.writeFileSync(outputPath, JSON.stringify(collection, null, 2), 'utf8');
  console.log(`Successfully generated and updated ${outputPath}`);
}

generatePostmanCollection().catch((err) => {
  console.error('Failed to generate Postman collection:', err);
  process.exit(1);
});
