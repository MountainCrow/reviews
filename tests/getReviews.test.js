/* eslint-disable */
const request = require('supertest');
const app = require('../server/index.js');

jest.useFakeTimers();

describe('Server Endpoints', () => {
  it('should return an array of lenght 10', async () => {
    const res = await request(app)
      .get('/reviews');

    expect(res.body.length).toBe(10);
    expect(res.statusCode.toEqual(200));
  });

})