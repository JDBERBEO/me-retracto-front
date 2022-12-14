import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { FiAlertCircle } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalAsync } from '../../../store/features/claims/claimsSlice';

export const FeedbackModal = () => {
  // eslint-disable-next-line prettier/prettier
  const feedbackModal = useSelector((state: any) => state.claims.feedbackModal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAsync());
  };

  return (
    <>
      <Modal
        show={feedbackModal.open}
        onHide={() => closeModal()}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title
            className={
              feedbackModal.operationStatus === 'success'
                ? 'feedback-modal-title-success'
                : 'feedback-modal-title-failed'
            }>
            <Row>
              <Col className="align-items-center justify-content-center">
                <FiAlertCircle size={70} />
              </Col>
              <Col className="align-items-center justify-content-center">
                {feedbackModal.operationStatus === 'success' ? (
                  <h2 className="preventModalTitle__text">ÉXITO!</h2>
                ) : (
                  <h2 className="preventModalTitle__text">UPPS ALGO SALIÓ MAL...</h2>
                )}
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {' '}
            {feedbackModal.operationStatus === 'failed' ? `Status: ${feedbackModal.status}` : null}
          </p>
          <p>{feedbackModal.message ? feedbackModal.message : null}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
