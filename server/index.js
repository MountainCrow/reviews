const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../database/db.js');

const app = express();

app.use(cors());