const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { ReviewModel, db } = require('../database/db.js');

const PORT = 3003;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

const status = app.get('/', (req, res) => {
  res.status(200);
  res.end();
});

// test this for return object type or length
const getReviews = app.get('/reviews', (req, res) => {
  const ran = Math.ceil(Math.random() * 6) + 4;
  const ran2 = Math.floor(Math.random() * ran);
  ReviewModel.find()
    .limit(ran)
    .skip(ran2)
    .exec((err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200);
        console.log(results);
        res.send(results);
      }
    });

});

// app.post('/productInfo', (req,res) => {
//   //
// });

app.listen(PORT, () => console.log('Listening on Port 3003'));

module.exports = { app, getReviews };
