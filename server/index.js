const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3232;
const path = require('path');
const CONTACTS = require('./routers/contacts');
const CONTACT_DETAILS = require('./routers/details');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

//routes
app.use('/api/contacts', CONTACTS);
// app.use('/api/details', CONTACT_DETAILS);

app.listen(port, err => err ? console.error('SERVER ERROR: ', err) : console.log(`Server is listening on port ${port}`))