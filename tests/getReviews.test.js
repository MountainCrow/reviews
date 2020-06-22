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

<<<<<<< HEAD
})


=======

})




>>>>>>> b8b554039a0ec0b023b7981d19c54bf7a1678fd5
