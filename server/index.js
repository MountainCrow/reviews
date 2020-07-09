const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { ReviewModel, db } = require('../database/db.js');
const pool = require('../database/postgres-db.js');

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
const getReviews = app.get('/reviews/:productId', (req, res) => {
  const query = `SELECT
  *
  FROM
  reviews_table
  WHERE
  product_id = ${req.params.productId}`;
  // fix the route to only select the reviews that match the product id
  pool.query(query, (err, data) => {
    if (data) {
      // console.log(data.rows, 'found');
      res.send(data.rows);
    } else {
      // console.log(err, 'doesnt work');
      res.status(400).send(err);
    }
  });

});

// app.post('/productInfo', (req,res) => {
//   //
// });

app.listen(PORT, () => console.log('Listening on Port 3003'));

module.exports = { app, getReviews };
