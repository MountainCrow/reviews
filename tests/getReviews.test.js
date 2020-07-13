/* eslint-disable */
const supertest = require('supertest');
const helpers = require('./helpers.js');

describe('Server Endpoints', () => {

  it('should get reviews by product id (number 28)', () => {
   return helpers.fetchReviews(28)
    .then(data => {
      expect(data.length).toBe(55);
      expect(data[0].firstname).toBe('Fidel');
      expect(data[0].lastname).toBe('Dicki');
    })
    .catch(err => err);

  });
  it('should get reviews by product id (number 72190)', () => {
    return helpers.fetchReviews(72190)
    .then(data => {
      expect(data.length).toBe(44);
      expect(data[0].firstname).toBe('Olaf');
      expect(data[0].lastname).toBe('Schultz');
    })
    .catch(err => err);

  });
  it('should get the first 1000 elements', () => {
    return helpers.topOnePercent()
    .then(data => {
      expect(data.length).toBe(1000);
      expect(data[0].firstname).toBe('Oliver');
      expect(data[0].lastname).toBe('Cool');
      expect(data[999].firstname).toBe('Hailie');
      expect(data[999].lastname).toBe('Lind');
    })
    .catch(err => err);

  });
})




