const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const morgan = require('morgan');
// const { ReviewModel, db } = require('../database/db.js');
const pool = require('../database/postgres-db.js');
const mongoose = require('mongoose');
// require('../database/scripts/load_reviews.js');

const PORT = 3003;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.use(morgan('dev'));

Promise.promisifyAll(mongoose);

const status = app.get('/', (req, res) => {
  res.status(200);
  res.end();
});

// test this for return object type or length
// postgres routes
const getReviews = app.get('/reviews/:productId', (req, res) => {
  const query = `SELECT
  *
  FROM
  reviews_table
  WHERE
  product_id = ${req.params.productId}`;

  pool.query(query, (err, data) => {
    if (data) {
      res.send(data.rows);
    } else {
      res.status(400).send(err);
    }
  });
});

app.get('/topOnePercent', (req, res) => {
  const query = 'SELECT * FROM reviews_table WHERE _id BETWEEN 1 AND 1000';

  pool.query(query, (err, data) => {
    if (data) {
      res.send(data.rows);
    } else {
      res.status(400).send(err);
    }
  });

});

app.post('/writeReview', (req, res) => {
  pool.query('SELECT MAX(_id) FROM reviews_table;')
    .then((data) => {
      const index = Number(data.rows[0].max) + 1;
      pool.query(`INSERT INTO reviews_table(_id, description, firstname, lastname, postdate, product_id, stars, title, product_type)VALUES(${index}, 'Cool Product 3','Oliver', 'Cool', 'Jun 15th 2020', 3, 4, 'product is decent', 'bag')`)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => console.error(err.stack));
    })
    .catch((err) => console.error(err.stack));
});

// mongo routes, not used because I have chosen to go with postgres as my database

// app.get('/mongo/reviews/:productId', (req, res) => {
//   ReviewModel.find({ product_id: req.params.productId })
//     .then((data) => {
//       // console.log('found data', data);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.error(err);
//     });
// });

// app.get('/mongo/topOnePercent', (req, res) => {
//   ReviewModel.find({}).limit(50000)
//   // .skip to go to the middle
//     .then((data) => {
//       // console.log('found data', data.length);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.error(err);
//     });

// });

app.listen(PORT, () => console.log('Listening on Port 3003'));

module.exports = { app, getReviews };
