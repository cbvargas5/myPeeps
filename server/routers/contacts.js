const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contacts')

router
    .route('/')
    .get(contactControllers.getAllContacts)
    .post(contactControllers.createContact)


module.exports = router