const express = require('express')
const detailQueries = require('../database/models/details')

module.exports = {
    getAllDetailsForContact: (req, res) => {
        const contactId = req.params.id
        const detailsToSend = {
            addresses: [],
            phoneNumbers: []
        }

        detailQueries.getAllAddressesForContact(contactId)
            .then(data => detailsToSend.addresses = data.rows)
            .then(() => detailQueries.getAllPhoneNumbersForContact(contactId))
            .then(data => {
                detailsToSend.phoneNumbers = data.rows
                res.status(200).send(detailsToSend)
            })
            .catch(err => res.status(400).send(err))
    }
}