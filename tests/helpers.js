const axios = require('axios');

const helpers = {
  fetchReviews: () => axios.get('127.0.0.1:3003/reviews')
    .then((response) => response.data)
    .catch((err) => err),
};

module.exports = helpers;
