import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../Contact';

import { useGet } from '../../customHooks/useGet'

interface ContactPageProps {

}

const ContactPage: React.FC<ContactPageProps> = ({ }) => {
  const { responseData, isLoading } = useGet('/api/contacts')
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
            Array.isArray(responseData) &&
            responseData.map(({ contact_id, first_name, last_name, category }) => (
              <li className="contact-list-item">
                <Link to={`/contact-details/${contact_id}`}>
                  <Contact contactId={contact_id} firstName={first_name} lastName={last_name} category={category} />
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default ContactPage