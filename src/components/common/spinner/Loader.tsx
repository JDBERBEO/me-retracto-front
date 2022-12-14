import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loader = ({ variant }) => {
  return (
    <Spinner animation="border" role="status" variant={variant}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
