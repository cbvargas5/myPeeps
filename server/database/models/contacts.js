const pool = require('../index')
const {
    GET_ALL_CONTACTS,
    CREATE_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
} = require('./param-queries').contactTableQueryStrings

module.exports = {
    getAllContactsFromDatabase: () => pool.query(GET_ALL_CONTACTS),
    createContact: (...contactColumnsToAdd) => pool.query(CREATE_CONTACT, contactColumnsToAdd),
    // updateContact: (id, request)
}