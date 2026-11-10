const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const adminFiles = walkSync('./src/admin');
const publicFiles = walkSync('./src/public');
const authFiles = walkSync('./src/auth');

function processControllers(files, group) {
  files.forEach(file => {
    if (!file.endsWith('.controller.ts')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if ApiTags is already imported
    if (!content.includes('ApiTags')) {
      content = content.replace(/import { Controller/, 'import { ApiTags, ApiBearerAuth } from \'@nestjs/swagger\';\nimport { Controller');
    }
    
    // Extract controller name for the tag
    const match = content.match(/export class (\w+)Controller/);
    if (match) {
      const name = match[1];
      const tag = name.replace('Admin', '').replace('Public', '');
      
      // Add decorators above @Controller
      if (group === 'admin') {
        content = content.replace(/@Controller\(/, `@ApiTags('Admin - ${tag}')\n@ApiBearerAuth()\n@Controller(`);
      } else {
        content = content.replace(/@Controller\(/, `@ApiTags('Public - ${tag}')\n@Controller(`);
      }
      
      fs.writeFileSync(file, content);
    }
  });
}

processControllers(adminFiles, 'admin');
processControllers(publicFiles, 'public');
processControllers(authFiles, 'public');

console.log('Decorated controllers with Swagger tags');
