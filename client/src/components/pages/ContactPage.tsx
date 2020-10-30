import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../Contact';

interface ContactPageProps {

}

const ContactPage: React.FC<ContactPageProps> = ({ }) => {
  return (
    <section className="contact-page">
      <header>
        <h1>myPEEPS</h1>
      </header>
      <section className="big-card">
        {/* search */}
        {/* add contact button */}
        {/* list of contacts */}
      </section>
    </section>
  );
}

export default ContactPage