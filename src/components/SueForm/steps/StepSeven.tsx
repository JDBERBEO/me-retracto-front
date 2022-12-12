import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getClaimsAsync } from '../../../store/features/claims/claimsSlice';
import { ErrorHandler } from '../../common/ErrorHandler.tsx';

export const StepSeven = () => {
  const dispatch = useDispatch();
  const { previousCheckoutClaim, error } = useSelector((state: any) => state.claims);

  const checkout = new WidgetCheckout({
    currency: 'COP',
    amountInCents: parseFloat(previousCheckoutClaim.claimCreated.claimFields.casePrice) * 100,
    reference: previousCheckoutClaim.claimCreated._id,
    publicKey: process.env.REACT_APP_WOMPI_KEY,
    redirectUrl: process.env.REACT_APP_REDIRECT_URL // Opcional
  });

  const payment = (e) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    checkout.open(function (result) {});
  };

  useEffect(() => {
    dispatch(getClaimsAsync());
  }, []);

  if (error) {
    return <ErrorHandler />;
  }

  return (
    <>
      <Col className="d-flex justify-content-center align-items-center flex-column" xs={12}>
        <p className="form-label py-5">Solo falta un paso para finalizar el proceso</p>
        <div style={{ height: '250px' }}>
          <button className="outlinedButton mb-5" onClick={payment}>
            PAGAR
          </button>
        </div>
      </Col>
    </>
  );
};
