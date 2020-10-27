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
    },

    createAddress: (req, res) => {
        const {
            street_address,
            city,
            state_name,
            zip
        } = req.body

        detailQueries.createAddressRecord(req.params.id, street_address, city, state_name, zip)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
    updateAddress: (req, res) => {
        const {
            street_address,
            city,
            state_name,
            zip
        } = req.body

        detailQueries.updateAddressRecord(req.params.id, street_address, city, state_name, zip)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
    deleteAddress: (req, res) => {
        detailQueries.deleteAddressRecord(req.params.id)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },

    createPhoneNumber: (req, res) => {
        detailQueries.createPhoneNumRecord(req.params.id, req.body.phone_num)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
    updatePhoneNumber: (req, res) => {
        detailQueries.updatePhoneNumRecord(req.params.id, req.body.phone_num)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
    deletePhoneNumber: (req, res) => {
        detailQueries.deletePhoneNumRecord(req.params.id)
            .then(() => res.status(200).end())
            .catch(err => res.status(400).send(err))
    },
    // 
}