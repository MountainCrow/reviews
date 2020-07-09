const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: '../data/data.csv',
  header: [
    '_id',
    'product_id',
    'stars',
    'title',
    'product_type',
    'description',
    'lastname',
    'firstname',
    'postdate',
  ],
});
let id = 5;
const productTypes = ['bag', 'tent', 'coat'];
const months = ['Apr', 'May', 'Jun', 'Jul'];
const suffixes = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
  10: 'th',
  11: 'th',
  12: 'th',
  13: 'th',
  14: 'th',
  15: 'th',
  16: 'th',
  17: 'th',
  18: 'th',
  19: 'th',
  20: 'th',
  21: 'st',
  22: 'nd',
  23: 'rd',
  24: 'th',
  25: 'th',
  26: 'th',
  27: 'th',
  28: 'th',
  29: 'th',
  30: 'th',
};
let records = [];

while ( id < 200) { // populating i rows of data and adding to csv
  let row = []; // make sure items are added in the same order as they are in the header
  row.push(id); // adding the id (represented by i) to the row
  const productId = Math.floor(Math.random() * 100); // random integer between 0 and 100 for the productId
  row.push(productId);
  const starRating = Math.floor(Math.random() * 4) + 1; // random number from 0 to 4 plus one so now its from 1 to 5
  row.push(starRating);
  const title = 'sample product review'; // generate random text here just using a fixed string for now
  row.push(title);
  const prodType = productTypes[productId % 3]; // choose from one of 3 product types depending on the id, makes it consistent for all products with the same id
  row.push(prodType);
  const description = 'sample product description'; // generate random text here just using a fixed string for now
  row.push(description);
  const lastName = 'Doe'; // generate random text here just using a fixed string for now
  row.push(lastName);
  const firstName = 'Joe'; // generate random text here just using a fixed string for now
  row.push(firstName);
  const day = (Math.floor(Math.random() * 29) + 1).toString(); // random number 1 to 30 as a string
  const month = months[Math.floor(Math.random() * 3)]; // random month from the array
  const suffix = suffixes[day]; // gets the correct suffix for the randomly picked day
  const postDate = `${month} ${day}${suffix} 2020`; // put together the randomly generated data as a string as we want it, need to change 5th to the random day with the correct suffix;
  row.push(postDate);
  records.push(row); // add the row to the records
  id += 1; // increment the id by 1
}

console.log('start writing recors');
csvWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  })
  .catch((err) => {
    console.error(err);
  });
