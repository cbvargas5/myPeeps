import React from 'react'

interface ContactProps {
  contactId: string;
  firstName: string;
  lastName: string | null;
  category: string | null;
}

const Contact: React.FC<ContactProps> = ({ contactId, firstName, lastName, category }) => {
  return (
    <div data-contact-id={contactId} className="contact-wrapper">
      <div className="contact-name">{firstName} {lastName && lastName}</div>
      <div className="category-title">{category && category}</div>
    </div>
  );
}

export default Contact