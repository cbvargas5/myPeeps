import React, { useState } from "react"
import ContactPage from './components/pages/ContactPage'
import DetailsPage from './components/pages/DetailsPage'
import EditContactPage from './components/pages/EditContactPage'

import { useGet } from './customHooks/useGet'


const App: React.FC = () => {
  let isLoading: boolean = false
  let getContactResponse;
  let contactArray;
  const [clickedContactId, setClickedContactId] = useState<string | null>(null)
  if (!clickedContactId) {
    getContactResponse = useGet('/api/contacts')
    isLoading = getContactResponse.isLoading
    contactArray = getContactResponse.responseData

  }

  const clickContact = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let selectedContactId = event.currentTarget.getAttribute('data-contact-id')
    setClickedContactId(selectedContactId)
    const getDetailsResponse = useGet(`/api/details/${selectedContactId}`)
    // const contactDetailsObject = getDetailsResponse.responseData
    // console.log(contactDetailsObject)
  }

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