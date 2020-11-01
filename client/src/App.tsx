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
  const { Provider } = React.createContext(clickContact)

  if (isLoading) {
    return (
      <div>Loading Data...</div>
    )
  } else if (Array.isArray(contactArray)) {
    return (
      <main>
        <Provider value={clickContact}>
          <ContactPage ContactData={contactArray} />
        </Provider>
      </main>
    )
  } else {
    return (
      <main>
        <DetailsPage />
        <EditContactPage />
      </main>
    );
  }
}

export default App