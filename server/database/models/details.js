const pool = require('../index')
const {
    GET_CONTACT_ADDRESSES,
    CREATE_ADDRESS,
    UPDATE_ADDRESS,
    DELETE_ADDRESS
} = require('./param-queries').addressTableQueryStrings

const {
    GET_CONTACT_PHONE_NUMBERS,
    CREATE_PHONE_NUMBER,
    UPDATE_PHONE_NUMBER,
    DELETE_PHONE_NUMBER
} = require('./param-queries').phoneNumbersTableQueryStrings

module.exports = {
    getAllAddressesForContact: id => pool.query(GET_CONTACT_ADDRESSES, [id]),
    getAllPhoneNumbersForContact: id => pool.query(GET_CONTACT_PHONE_NUMBERS, [id])
}