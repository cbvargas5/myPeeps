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
    getAllPhoneNumbersForContact: id => pool.query(GET_CONTACT_PHONE_NUMBERS, [id]),

    createAddressRecord: (...addressColumnsToAdd) => pool.query(CREATE_ADDRESS, addressColumnsToAdd),
    updateAddressRecord: (addressId, ...addressColumnsToUpdate) => pool.query(UPDATE_ADDRESS, [addressId, ...addressColumnsToUpdate]),
    deleteAddressRecord: id => pool.query(DELETE_ADDRESS, [id]),

    createPhoneNumRecord: (...phoneNumberColumnsToAdd) => pool.query(CREATE_PHONE_NUMBER, phoneNumberColumnsToAdd),
    updatePhoneNumRecord: (phoneNumberId, ...phoneNumberColumnsToUpdate) => pool.query(UPDATE_PHONE_NUMBER, [phoneNumberId, ...phoneNumberColumnsToUpdate]),
    deletePhoneNumRecord: id => pool.query(DELETE_PHONE_NUMBER, [id])
}