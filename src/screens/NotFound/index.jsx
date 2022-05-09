import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Routes';

import './styles.css';

function NotFound() {
  return (
    <div className="contentNotFound">
      <h3 className="text">Not found</h3>
      <Link className="button" to={ROUTES.HOME}>
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
