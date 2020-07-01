const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

const db = mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
});

mongoose.connection.on('error', console.error.bind(console, 'Connection Error'));

// schema
const reviewSchema = mongoose.Schema({
  product_id: Number,
  stars: Number,
  postDate: String,
  title: String,
  description: String,
  firstName: String,
  lastName: String,
  productType: String,
}, {
  collection: 'reviews',
});

// model
const ReviewModel = mongoose.model('Review', reviewSchema);

const addFakeData = (i, str) => {
  const reviewObj = {};
  reviewObj.product_id = i;
  reviewObj.stars = Math.ceil(Math.random() * 5);
  reviewObj.postDate = faker.date.past();
  reviewObj.title = faker.fake('{{lorem.words}} {{commerce.productAdjective}}');
  reviewObj.description = faker.lorem.paragraph();
  reviewObj.firstName = faker.name.firstName();
  reviewObj.lastName = faker.name.lastName();
  reviewObj.productType = str;

  const newReview = new ReviewModel(reviewObj);
  newReview.save((err, review) => {
    if (err) {
      console.log('There was an error saving your review to the DB');
    } else {
      return review;
    }
  });

  console.log(reviewObj);
};

// run the db function
// for (let i = 1; i <= 100; i++) {
//   if (i < 33) {
//     addFakeData(i, 'bag');
//   } else if (i >= 33 && i < 66) {
//     addFakeData(i, 'jacket');
//   } else {
//     addFakeData(i, 'tent');
//   }
// }

module.exports = { ReviewModel, db };
