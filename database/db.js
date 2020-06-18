const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Database Connected');
});

mongoose.connection.on('error', console.error.bind(console, 'Connection Error'));

// schema
const reviewSchema = mongoose.Schema({
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

const addFakeData = () => {
  const reviewObj = {};
  reviewObj.stars = Math.ceil(Math.random() * 5);
  reviewObj.postDate = moment(faker.date.past()).format('MMM Do YYYY');
  reviewObj.title = faker.lorem.words();
  reviewObj.description = faker.lorem.paragraph();
  reviewObj.firstName = faker.name.firstName();
  reviewObj.lastName = faker.name.lastName();
  reviewObj.productType = faker.lorem.word();

  console.log(reviewObj);
};

addFakeData();