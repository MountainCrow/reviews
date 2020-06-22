/* eslint-disable */
const supertest = require('supertest');
const helpers = require('./helpers.js');

describe('Server Endpoints', () => {

  it('should return an array of lenght 10', () => {
   expect.assertions(1);

   return helpers.fetchReviews()
    .then(data => {
      expect(data.length).toBe(10);
    })
    .catch(err => err);

  });


})




