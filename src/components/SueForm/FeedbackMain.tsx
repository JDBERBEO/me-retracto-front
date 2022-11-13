import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorHandler } from '../common/ErrorHandler.tsx';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';

export const FeedbackMain = () => {
  const { claims, templates }: any = useSelector((state) => state);

  return (
    <>
      <DefaultNavbar />
      {claims.error || templates.error ? (
        <ErrorHandler />
      ) : (
        <div
          className="feedbackContainer"
          style={{
            backgroundColor: '#FAB816',
            width: '100%',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2
            style={{
              fontFamily: 'Raleway, sans-serif',
              letterSpacing: '2px',
              textAlign: 'center',
              fontWeight: 800,
              color: 'white',
              fontSize: '30px'
            }}
          >
            HAZ LLENADO TU SOLICITUD CORRECTAMENTE
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
          <Link to="/">
            <button
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
              }}
            >
              VOLVER A LA PÁGINA INICIAL
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
