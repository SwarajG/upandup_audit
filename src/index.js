// import express from 'express';
// import 'babel-polyfill';
// import './database/db';
// import env from './env';
// import routes from './routes';
// import bodyParser from 'body-parser'

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./database/db');
const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});