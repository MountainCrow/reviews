const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3003;

const db = require('../database/db.js');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
