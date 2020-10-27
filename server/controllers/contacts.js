const express = require('express')
const contactQueries = require('../database/models/contacts')

module.exports = {
    getAllContacts: (req, res) => {
        contactQueries.getAllContactsFromDatabase()
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
    createContact: (req, res) => {
        contactQueries.createContact(req.body)
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
}