import React from 'react';
import { Link,useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  const err = useRouteError();
  console.log(err)

  return (
    <div className="error-container">
      <h1 className="error-code">{err.status}</h1>
      <h2 className="error-message">Oops! This dish is off the menu.</h2>
      <p className="error-desc">We can't seem to find the page you are looking for. It might have been removed, or the link is broken.</p>
      <Link to="/" className="home-btn">Return to Home</Link>
    </div>
  );
};

export default ErrorPage;