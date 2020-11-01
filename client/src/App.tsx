import React from "react"
import ContactPage from './components/pages/ContactPage'
import DetailsPage from './components/pages/DetailsPage'
import EditContactPage from './components/pages/EditContactPage'

import { useGet } from './customHooks/useGet'


const App: React.FC = () => {

  const { responseData: contactArray, isLoading } = useGet('/api/contacts')

  if (isLoading) {
    return (
      <div>Loading Data...</div>
    )
  } else if (Array.isArray(contactArray)) {
    return (
      <main>
        <ContactPage ContactData={contactArray}/>
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