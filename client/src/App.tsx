import React, { useState } from "react"
import ContactPage from './components/pages/ContactPage'
import DetailsPage from './components/pages/DetailsPage'
import EditContactPage from './components/pages/EditContactPage'

import { useGet } from './customHooks/useGet'


const App: React.FC = () => {

  const { responseData: contactArray, isLoading } = useGet('/api/contacts')

  const [clickedContactId, setClickedContactId] = useState<string | null>(null)

  const clickContact = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClickedContactId(event.currentTarget.getAttribute('data-contact-id'))
  }
  console.log('isLoading:', isLoading)
  console.log('clicked contact', clickedContactId)
  if (isLoading) {
    return (
      <div>Loading Data...</div>
    )
  } else if (clickedContactId) {
    return (
      <main>
        <DetailsPage />
      </main>
    )
  } else if (Array.isArray(contactArray)) {
    return (
      <main>
        <ContactPage clickContact={clickContact} ContactData={contactArray} />
      </main>
    )
  } else {
    return (
      <main>
        <EditContactPage />
      </main>
    );
  }
}

export default App