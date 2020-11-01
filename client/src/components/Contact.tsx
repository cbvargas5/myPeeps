import React from 'react'

interface ContactProps {
  contactId: string;
  firstName: string;
  lastName: string | null;
  category: string | null;
  clickContact: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Contact: React.FC<ContactProps> = ({ contactId, clickContact, firstName, lastName, category }) => {
  return (
    <div onClick={clickContact} data-contact-id={contactId} className="contact-wrapper">
      <div className="contact-name">{firstName} {lastName && lastName}</div>
      <div className="category-title">{category && category}</div>
    </div>
  );
}

export default Contact