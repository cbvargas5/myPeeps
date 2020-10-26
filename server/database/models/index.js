const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3131;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

//routes

app.listen(port, err => err ? console.error('SERVER ERROR: ', err) : console.log(`Server is listening on port ${port}`))