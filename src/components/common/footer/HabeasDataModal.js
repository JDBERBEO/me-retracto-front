import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

export const HabeasDataModal = (props) => {
  const { openModal, show, closeModal, types } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={() => closeModal()}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title className="habeas-data-modal__title">
            <Row className="align-items-center justify-content-center">
              <Col className="align-items-center justify-content-center">
                <h2 className="habeas-data-modal__title">{types.footer.habeasData.modal.title}</h2>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{types.footer.habeasData.modal.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="containerButton__black" onClick={() => closeModal()}>
            {types.footer.habeasData.modal.closeButton}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
