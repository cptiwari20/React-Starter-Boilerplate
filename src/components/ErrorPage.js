import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div>
    <h1>Sorry! No page found.</h1>
    <p>Go to Dashboard.</p>
    <Link to='/'>Home</Link>
  </div>
);

export default ErrorPage;