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

// test this for return object type or length
const getReviews = app.get('/reviews', (req, res) => {
  const ran = Math.ceil(Math.random() * 6);
  ReviewModel.find()
    .limit(ran)
    .exec((err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200);
        res.send(results);
      }
    });

});

app.listen(PORT);

module.exports = { app, getReviews };
