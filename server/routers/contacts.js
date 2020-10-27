const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contacts')

router
    .route('/')
    .get(contactControllers.getAllContacts)
    .post(contactControllers.createContact)

router
    .route('/:id')
    .put(contactControllers.updateContact)
    .delete(contactControllers.deleteContact)


module.exports = router