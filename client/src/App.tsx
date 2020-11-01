import React from "react"
import ContactPage from './components/pages/ContactPage'
import DetailsPage from './components/pages/DetailsPage'
import EditContactPage from './components/pages/EditContactPage'

const App: React.FC = () => {
  return (
    <main>
      <ContactPage />
      <DetailsPage />
      <EditContactPage />
    </main>
  );
}

export default App