// let months = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// this.toString();
// let splitDate = this.split('/');
// let monthNum = parseInt(splitDate[0]);
// let month = months[monthNum];
// let date = month + ' ' + parseInt(splitDate[1]) + ' ' + '2020';
// return date;
// maybe helpful for converting datetime into string
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
//   "INSERT INTO public.reviews(_id, description, firstname, lastname, postdate, product_id, stars, title, product_type)VALUES('a1', 'Cool Product','Max', 'Rosenberg', 'Apr 12th 2020', 20, 4, 'product review', 'bag')",
//   (err, res) => {
//     console.log(err, res);
//     pool.end();
//   });
module.exports = pool;
