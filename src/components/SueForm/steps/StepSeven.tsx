import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getClaimsAsync } from '../../../store/features/claims/claimsSlice';
import { ErrorHandler } from '../../common/ErrorHandler.tsx';
import { Loader } from '../../common/spinner/Loader.tsx';

export const StepSeven = ({ i, goPreviousStep }) => {
  const dispatch = useDispatch();
  const { previousCheckoutClaim, error, loading } = useSelector((state: any) => state.claims);

  let checkout;
  if (previousCheckoutClaim && previousCheckoutClaim.claimCreated !== undefined) {
    checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: parseFloat(previousCheckoutClaim.claimCreated.claimFields.casePrice) * 100,
      reference: previousCheckoutClaim.claimCreated._id,
      publicKey: process.env.REACT_APP_WOMPI_KEY,
      redirectUrl: process.env.REACT_APP_REDIRECT_URL // Opcional
    });
  }

  const payment = (e) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    checkout.open(function (result) {});
  };

  useEffect(() => {
    dispatch(getClaimsAsync());
  }, []);

  if (loading) {
    return (
      <Row>
        <Col>
          <Row>
            <Col
              xs={12}
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ height: '550px' }}>
              <Loader variant={'success'} />
              <p className="form-label mt-5">Cargando...</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  return (
    <div style={{ height: '500px' }}>
      <Col className="d-flex justify-content-center align-items-center flex-column" xs={12}>
        <p className="form-label py-5">Solo falta un paso para finalizar el proceso</p>
        {/* <div style={{ height: '200px' }}> */}
        {/* <button className="outlinedButton mb-5" onClick={payment}>
          PAGAR
        </button> */}
        {/* </div> */}
        {i === 0 ? null : (
          <div>
            <button className="previousStepbutton mb-5" onClick={goPreviousStep}>
              {'ATRÁS'}
            </button>
            <button className="containerButton__size-m__green pd-3 mb-5" onClick={payment}>
              PAGAR
            </button>
          </div>
        )}
      </Col>
    </div>
  );
};
