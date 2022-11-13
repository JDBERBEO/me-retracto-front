import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cleanError } from '../../store/features/claims/claimsSlice';

export const ErrorHandler = () => {
  const dispatch = useDispatch();

  const cleanErrorHandler = () => {
    dispatch(cleanError());
  };
  return (
    <div
      className="feedbackContainer"
      style={{
        backgroundColor: '#EB646F',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h2
        style={{
          fontFamily: 'Raleway, sans-serif',
          letterSpacing: '2px',
          textAlign: 'center',
          fontWeight: 800,
          color: 'white',
          fontSize: '30px'
        }}>
        Upps...hubo algún error y tu solicitud no fue creada. Porfavor, vuelve a intentar
      </h2>
      {/* TODO resend user depending its type (lawyer --> lawyertable, admin --> templates, customer --> main page ) */}
      <Link to="/">
        <button
          onClick={cleanErrorHandler}
          style={{
            backgroundColor: 'transparent',
            border: 'white solid',
            borderRadius: '25px',
            fontFamily: 'Raleway, sans-serif',
            letterSpacing: '2px',
            textAlign: 'center',
            fontWeight: 500,
            color: 'white',
            fontSize: '22px'
          }}>
          VOLVER A LA PÁGINA INICIAL
        </button>
      </Link>
    </div>
  );
};
