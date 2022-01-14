import * as supertest from 'supertest';

import config from '../config/configuration';
import Server from '../Server';

describe('Router test check', () => {
  const server = new Server(config);
  const responseApp = server.bootstrap();
  const request = supertest(responseApp);

  describe('/health-check-test', () => {
    test('return apiResponse', async () => {
      const dataResponse = await request.get('/health-check');
      expect(dataResponse.text).toBe('I am OK');
    });
  });
});