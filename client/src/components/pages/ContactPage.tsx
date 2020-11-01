import React, { useState } from 'react'
import Contact from '../Contact';

import { ContactData } from '../../types'

interface ContactPageProps {
  ContactData: ContactData[];
}


const ContactPage: React.FC<ContactPageProps> = ({ ContactData }) => {

  const [clickedContactId, setClickedContactId] = useState<string | null>(null)

  const clickContact = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClickedContactId(event.currentTarget.getAttribute('data-contact-id'))
  }
  console.log('clicked boi', clickedContactId)
  return (
    <section className="contact-page">
      <header>
        <h1>myPEEPS</h1>
      </header>
      <section className="big-card">
        {/* search */}
        {/* add contact button */}
        <ul className="contact-list">
          {
            ContactData.map(({ contact_id, first_name, last_name, category }) => (
              <li data-contact-id={contact_id} className="contact-list-item">
                <Contact clickContact={clickContact} contactId={contact_id} firstName={first_name} lastName={last_name} category={category} />
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default ContactPage