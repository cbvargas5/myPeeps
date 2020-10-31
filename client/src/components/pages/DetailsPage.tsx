import React from 'react'

import ContactDetail from '../ContactDetail';

interface DetailsPageProps {

}

const DetailsPage: React.FC<DetailsPageProps> = (props) => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const contactIdFromQuery = urlParams.get('contact_id')
    return (
      <h1>Hello from DetailsPage</h1>
    );
}

export default DetailsPage