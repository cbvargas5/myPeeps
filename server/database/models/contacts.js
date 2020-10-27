const pool = require('../index')
const {
    GET_ALL_CONTACTS,
    CREATE_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
} = require('./param-queries').contactTableQueryStrings

module.exports = {
    getAllContactsFromDatabase: () => pool.query(GET_ALL_CONTACTS),
    createContact: (requestBody) => pool.query(CREATE_CONTACT, [requestBody.first_name, requestBody.last_name, requestBody.email, requestBody.category, requestBody.notes])
}