import React from 'react'
import { Link } from 'react-router-dom';

import ContactDetail from '../ContactDetail';

interface DetailsPageProps {

}

const DetailsPage: React.FC<DetailsPageProps> = (props) => {

    return (
      <section className="details-page">
        <header>
          {/* links for going back */}
          <h1></h1>
        </header>
        <div>
          <h2>First Last</h2>
        </div>
        <section className="big-card">
          <ul>
            {
              
            }
          </ul>
        </section>
      </section>
    );
}

export default DetailsPage