require('dotenv').config();
const {Pool, Client} = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(()=> {
    console.log('postgres database is connected');
  })
  .catch((err) => {
    console.error(err);
  });

// pool.query(
//   "INSERT INTO reviews_table(_id, description, firstname, lastname, postdate, product_id, stars, title, product_type)VALUES(4, 'Cool Product 3','Oliver', 'Cool', 'Jun 15th 2020', 3, 4, 'product is decent', 'bag')",
//   (err, res) => {
//     console.log(err, res);
//     pool.end();
//   });
module.exports = pool;
