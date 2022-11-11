import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { FiAlertCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOneClaimAsync } from '../../../store/features/claims/claimsSlice';
import emailjs from 'emailjs-com';

export const ConfimationModal = ({ claimId }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const claim = useSelector((state: any) => state.claims.currentClaim);

  const handleOnClick = () => {
    setShow(true);
    dispatch(getOneClaimAsync(claimId));
  };

  const sendEmail = (e: { preventDefault: () => void } | undefined) => {
    e.preventDefault();
    emailjs
      .send(
        'service_cc2049t',
        'template_wh3iaz4',
        {
          claimer_name: claim.claim.claimer,
          file_url: claim.claim.fileUrl,
          claimer_email: claim.claim.claimerEmail
        },
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShow(false);
  };
  return (
    <>
      <button className="containerButton__size-m__yellow" onClick={handleOnClick}>
        ENVIAR DOCUMENTO
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title className="preventModalTitle">
            <Row>
              <Col className="align-items-center justify-content-center">
                <FiAlertCircle size={70} />
              </Col>
              <Col className="align-items-center justify-content-center">
                <h2 className="preventModalTitle__text">CONFIRMACIÓN</h2>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Por favor, confirma si quieres enviar el documento al usuario.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="containerButton__purple" onClick={() => setShow(false)}>
            Cancelar
          </button>
          <button className="containerButton__red" onClick={sendEmail}>
            Confirmar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
