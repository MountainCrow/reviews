/* eslint-disable */
const supertest = require('supertest');
const app = require('../server/index.js');
const request = supertest(app);

describe('Server Endpoints', () => {

  it('should return an array of lenght 10', async done => {
    const res = await request.get('/reviews')

    expect(res.body.length).toBe(10);
    expect(res.status).toBe(200);

    done();
  });

})


// expect(res.body.length).toBe(10);
//     done();