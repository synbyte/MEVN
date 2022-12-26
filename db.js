const mongoose = require('mongoose')
const { PORT, mongoURI } = require('./config')
const cors = require('cors');
const { appendFile } = require('fs');
require('dotenv').config();

