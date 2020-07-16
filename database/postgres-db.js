require('dotenv').config();
const {Pool, Client} = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'gomets1',
  host: process.env.DB_HOST || 'ec2-13-57-242-35.us-west-1.compute.amazonaws.com',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'reviews_db',
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
