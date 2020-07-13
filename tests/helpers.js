const axios = require('axios');

const helpers = {
  fetchReviews: (id) => axios.get(`127.0.0.1:3003/reviews/${id}`)
    .then((response) => response.data)
    .catch((err) => err),
  topOnePercent: () => axios.get('127.0.0.1:3003/topOnePercent')
    .then((response) => response.data)
    .catch((err) => err),
  writeReview: () => axios.get('127.0.0.1:3003/writeReview')
    .then((response) => response.data)
    .catch((err) => err),
};

module.exports = helpers;
