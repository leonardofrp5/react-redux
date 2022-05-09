import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../Routes';
import './styles.css';

function Home() {
  return (
    <div className="content">
      <Link to={ROUTES.COUNTER} className="button">
        Go to counter
      </Link>
      <Link to={ROUTES.GET_API} className="button">
        Go to get API
      </Link>
      <Link to={ROUTES.CRUD} className="button">
        CRUD
      </Link>
    </div>
  );
}

export default Home;
