const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const { ReviewModel, db } = require('../database/db.js');

const PORT = 3003;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200,
// };

const status = app.get('/', (req, res) => {
  res.status(200);
  res.end();
});

// test this for return object type or length
const getReviews = app.get('/reviews', (req, res) => {
  const ran = Math.ceil(Math.random() * 10);
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

app.get('/', (req,res) => {
  res.send('Pinging the PORT 3003');
});

app.listen(PORT, () => console.log('Listening on Port 3003'));

module.exports = { app, getReviews };
