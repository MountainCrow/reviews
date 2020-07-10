const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const { ReviewModel, db } = require('../database/db.js');
const pool = require('../database/postgres-db.js');

const PORT = 3003;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

// Promise.promisifyAll(pool());

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

app.post('/writeReview', (req, res) => {
  pool.query('SELECT MAX(_id) FROM reviews_table;')
    .then((data) => {
      // console.log(data.rows[0].max);
      const index = Number(data.rows[0].max) + 1;
      pool.query(`INSERT INTO reviews_table(_id, description, firstname, lastname, postdate, product_id, stars, title, product_type)VALUES(${index}, 'Cool Product 3','Oliver', 'Cool', 'Jun 15th 2020', 3, 4, 'product is decent', 'bag')`)
        .then((data) => {
          // console.log(data);
          res.send(data);
        })
        .catch((err) => console.error(err.stack));
    })
    .catch((err) => console.error(err.stack));
});
//
//   pool.query('SELECT MAX(_id) from reviews_table')
//     .then((data) => {
//       const maxIndex = Number(data.rows[0].max) + 1;
//     //   return maxIndex;
//     // })
//     // .then((index) => {
//       pool.query(
//         `INSERT INTO reviews_table(_id, description, firstname, lastname, postdate, product_id, stars, title, product_type)VALUES(${maxIndex}, 'Cool Product 3','Oliver', 'Cool', 'Jun 15th 2020', 3, 4, 'product is decent', 'bag')`)// ,
//       //   (err, response) => {
//       //     console.log(err, response);
//       //     res.status(200);
//       //     pool.end();
//       //   },
//       // );
//       .then((data) => {
//         console.log(data);
//         res.send(data);
//       })
//       .catch(e=> console.error(e.stack));
//   })
//   .catch(e=> console.error(e.stack));
// });
// //     })
// //     .catch((err) => {
// //       res.send(err);
// //     });
// // });

app.listen(PORT, () => console.log('Listening on Port 3003'));

module.exports = { app, getReviews };
