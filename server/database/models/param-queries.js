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
    }

}