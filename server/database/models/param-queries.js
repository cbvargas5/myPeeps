module.exports = {
    contactTableQueryStrings: {
        GET_ALL_CONTACTS: "SELECT * FROM contacts",
        CREATE_CONTACT: `
          INSERT INTO contacts
          (first_name, last_name, email, category, notes)
          VALUES
          ($1, $2, $3, $4, $5)
        `,
        UPDATE_CONTACT: `
          UPDATE contacts
          SET
          first_name = $2,
          last_name = $3,
          email = $4,
          category = $5,
          notes = $6
          WHERE contact_id = $1
        `,
        DELETE_CONTACT: `
          DELETE FROM contacts
          WHERE contact_id = $1
        `
    },

    addressTableQueryStrings: {
        GET_CONTACT_ADDRESSES: `
          SELECT * FROM addresses
          WHERE
          contact_id = $1
        `,
        CREATE_ADDRESS: `
          INSERT INTO addresses
          (contact_id, street_address, city, state_name, zip)
          VALUES
          ($1, $2, $3, $4, $5)
        `,
        UPDATE_ADDRESS: `
          UPDATE addresses
          SET
          street_address = $2,
          city = $3,
          state_name = $4,
          zip = $5
          WHERE address_id = $1
        `,
        DELETE_ADDRESS: `
          DELETE FROM addresses
          WHERE address_id = $1
        `
    },

    phoneNumbersTableQueryStrings: {
        GET_CONTACT_PHONE_NUMBERS: `
          SELECT * FROM phone_numbers
          WHERE
          contact_id = $1
        `,
        CREATE_PHONE_NUMBER: `
          INSERT INTO phone_numbers
          (contact_id, phone_num)
          VALUES
          ($1, $2)
        `,
        UPDATE_PHONE_NUMBER: `
          UPDATE phone_numbers
          SET
          phone_num = $2
          WHERE phone_id = $1
        `,
        DELETE_PHONE_NUMBER: `
          DELETE FROM phone_numbers
          WHERE phone_id = $1
        `
    }

}