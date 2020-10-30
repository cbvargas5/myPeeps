import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage'
import DetailsPage from './components/pages/DetailsPage'
import EditContactPage from './components/pages/EditContactPage'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" exact component={ContactPage}/>
            <Route path="/contact-details" exact component={DetailsPage}/>
            <Route path="/edit-contact" exact component={EditContactPage}/>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App