const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'gomets1',
  host: 'localhost',
  port: 5432,
  database: 'reviewsDB',
});

pool.connect()
  .then(()=> {
    console.log('database is connected');
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
