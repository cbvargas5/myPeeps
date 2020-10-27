const express = require('express')
const router = express.Router()
const detailControllers = require('../controllers/details')

//contact id
router
    .route('/:id')
    .get(detailControllers.getAllDetailsForContact)

//contact id for post request ~~~ phone id for put and delete request
router
    .route('/phone/:id')
    .post(detailControllers.createPhoneNumber)
    .put(detailControllers.updatePhoneNumber)
    .delete(detailControllers.deletePhoneNumber)

//contact id for post request ~~~ address id for put and delete request
router
    .route('/address/:id')
    .post(detailControllers.createAddress)
    .put(detailControllers.updateAddress)
    .delete(detailControllers.deleteAddress)


module.exports = router