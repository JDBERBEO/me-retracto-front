import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <Spinner animation="border" role="status" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>  )
}
