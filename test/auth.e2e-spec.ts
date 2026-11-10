import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Authentication Flow (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/v1/auth/login (POST) - should login admin', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({ email: 'admin@hapua.org', password: 'admin123' })
      .expect(200)
      .then((res) => {
        expect(res.body.data.accessToken).toBeDefined();
        accessToken = res.body.data.accessToken;
      });
  });

  it('/api/v1/auth/login (POST) - should reject invalid credentials', () => {
    return request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .send({ email: 'admin@hapua.org', password: 'wrongpassword' })
      .expect(401);
  });

  it('/api/v1/admin/activities (GET) - should reject unauthorized', () => {
    return request(app.getHttpServer())
      .get('/api/v1/admin/activities')
      .expect(401); // Unauthorized
  });

  it('/api/v1/admin/activities (GET) - should allow authorized admin', () => {
    return request(app.getHttpServer())
      .get('/api/v1/admin/activities')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200); // OK
  });
});
