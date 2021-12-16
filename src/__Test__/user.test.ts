import { MongoMemoryServer } from 'mongodb-memory-server';
import * as supertest from 'supertest';
import config from '../config/configuration';
import Server from '../Server';
import Database from '../libs/Database';

describe('For user endpoints', () => {
  const userEmail = 'head.trainer@successive.tech';
  const userPassword = 'Training@123';
  let ID;
  const server = new Server(config);
  let mongoServer;
  let mongoUri;
  let req;
  let token;

  beforeAll(async () => {
    const app = await server.bootstrap();
    req = supertest(app);

    mongoServer = await MongoMemoryServer.create({
      instance: {
        dbName: 'express-training',
      },
    });
    mongoUri = mongoServer.getUri();
    console.log('Uri', mongoUri);


    await Database.open(mongoUri);

    const res = await req.post(`/api/user/createToken`).send({
      email: userEmail,
      password: userPassword,
    });
    token = res.body.data.token;
    console.log('token', token);
    console.log('res.body', res.body);

  });

  describe('Positive Test cases', () => {
    test('In create user', async () => {
      const newUser = {
        name: 'Trainee',
        role: 'trainee',
        email: 'trainee@successive.tech',
        password: 'Training@123',
      };
      const res = await req
        .post(`/api/user`)
        .set('Authorization', token)
        .send(newUser);
      expect(res.status).toBe(200);
      expect(res.body.data.name).toBe(newUser.name);
      expect(res.body.data.email).toBe(newUser.email);
      ID = res.body.data.originalId;
    });

    test('In getAll user', async () => {
      const res = await req.get(`/api/user`).set('Authorization', token);
      expect(res.status).toBe(200);
      expect(res.body.data).not.toBeUndefined();
    });

    test('In update user', async () => {
      const updateUser = {
        originalId: `${ID}`,
        name: 'Arjun',
        email: 'ar@gmail.com',
        role: 'trainee',
        password: 'Training@123',
      };
      const res = await req
        .put(`/api/user`)
        .set('Authorization', token)
        .send(updateUser);
      expect(res.status).toBe(200);
      expect(res.body.data.originalId).toBe(`${ID}`);
    });

    test('in Delete', async () => {
      const res = await req
        .delete(`/api/user`)
        .set('Authorization', token)
        .send({originalId: ID});
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('User deleted successfully');
    });
  });

  describe.skip('Negative test cases', () => {
    test('not found error', async () => {
      const notFoundId = '61b709a443fdd9d3f8e1ae70';
      const res = await req
        .get(`api/user/me`)
        .query({ originalId: notFoundId })
        .set('Authorization', token);
      expect(res.body.message).toBe(500);
    });
  });

  afterAll(async () => {
    Database.close();
  });
});