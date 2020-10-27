const express = require('express')
const contactQueries = require('../database/models/contacts')

module.exports = {
    getAllContacts: (req, res) => {
        contactQueries.getAllContactsFromDatabase()
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
    createContact: (req, res) => {
        const {
            first_name,
            last_name,
            email,
            category,
            notes
        } = req.body

        contactQueries.createContact(first_name, last_name, email, category, notes)
            .then(data => res.status(200).send(data.rows))
            .catch(err => res.status(400).send(err))
    },
}