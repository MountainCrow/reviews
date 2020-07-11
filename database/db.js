const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

mongoose.connect('mongodb://localhost/SDC', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => {
  console.log('connected to mongoose db!');
});

// schema
const reviewSchema = mongoose.Schema({
  product_id: Number,
  stars: Number,
  postdate: String,
  title: String,
  description: String,
  firstname: String,
  lastname: String,
  product_type: String,
}, {
  collection: 'reviews',
});

// model
const ReviewModel = mongoose.model('Review', reviewSchema);

// const addFakeData = (i, str) => {
//   const reviewObj = {};
//   reviewObj.product_id = i;
//   reviewObj.stars = Math.ceil(Math.random() * 5);
//   reviewObj.postDate = faker.date.past();
//   reviewObj.title = faker.fake('{{lorem.words}} {{commerce.productAdjective}}');
//   reviewObj.description = faker.lorem.paragraph();
//   reviewObj.firstName = faker.name.firstName();
//   reviewObj.lastName = faker.name.lastName();
//   reviewObj.productType = str;

//   const newReview = new ReviewModel(reviewObj);
//   newReview.save((err, review) => {
//     if (err) {
//       console.log('There was an error saving your review to the DB');
//     } else {
//       return review;
//     }
//   });

//   // console.log(reviewObj);
// };

// // // run the db function
// for (let i = 1; i <= 2; i++) {
//   if (i < 33) {
//     addFakeData(i, 'bag');
//   } else if (i >= 33 && i < 66) {
//     addFakeData(i, 'jacket');
//   } else {
//     addFakeData(i, 'tent');
//   }
// }

module.exports = { ReviewModel, db };

/*

Data from Product-Detail Structure

{
  "name": "KANKEN LAPTOP 13\"",
  "type": "backpack",
  "description": "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit",
  "userRating": 5,
  "totalRatings": 6,
  "price": 110.00,
  "gender": "Unisex",
  "style": "Style # F27171",
  "size": ["One Size"],
  "color": "166 - Acorn",
  "url": ["https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg"]
}
*/