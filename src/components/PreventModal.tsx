import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import types from '../constants/typesHome';

export const PreventModal = ({ buttonText, index, buttonColor }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {index === 0 ? null : (
        <button className={buttonColor} onClick={() => setShow(true)}>
          {buttonText}
        </button>
      )}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title className="preventModalTitle">
            <Row>
              <Col className="align-items-center justify-content-center">
                <FiAlertCircle size={70} />
              </Col>
              <Col className="align-items-center justify-content-center">
                <h2 className="preventModalTitle__text">{types.preventModal.title}</h2>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{types.preventModal.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <a href="https://res.cloudinary.com/me-retracto/raw/upload/v1670812684/previous%20complaints%20models/reclamacion_previa_e08ljt.docx">
            <button className="containerButton__purple">{types.preventModal.downloadButton}</button>
          </a>
          <Link to="/form">
            <button className="containerButton__red">{types.preventModal.button}</button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
