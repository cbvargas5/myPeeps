CREATE TABLE contacts
(
  contact_id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(25),
  email VARCHAR(50),
  category VARCHAR(50),
  notes VARCHAR(150)
);

CREATE TABLE phone_numbers
(
  phone_id BIGSERIAL NOT NULL PRIMARY KEY,
  contact_id INT NOT NULL,
  phone_num VARCHAR(15),
  CONSTRAINT fk_contact
    FOREIGN KEY(contact_id)
      REFERENCES contacts(contact_id)
      ON DELETE CASCADE
);

CREATE TABLE addresses
(
  address_id BIGSERIAL NOT NULL PRIMARY KEY,
  contact_id INT NOT NULL,
  street_address VARCHAR(50),
  city VARCHAR(50),
  state_name VARCHAR(25),
  zip VARCHAR(13),
  CONSTRAINT fk_contact
    FOREIGN KEY(contact_id)
      REFERENCES contacts(contact_id)
      ON DELETE CASCADE
);