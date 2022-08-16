import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'


export const  ConfimationModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="containerButton__size-m__yellow" onClick={() => setShow(true)}>
        ENVIAR DOCUMENTO
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton >
          <Modal.Title className="preventModalTitle">
            <Row >
              <Col className="align-items-center justify-content-center">
                <FiAlertCircle size={70} />
              </Col>
              <Col className="align-items-center justify-content-center">
                <h2 className="preventModalTitle__text">CONFIRMACIÓN</h2>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
            Por favor, confirma si quieres enviar el documento al usuario.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="containerButton__purple" onClick={() => setShow(false)}>
            Cancelar
          </button>
          <button className="containerButton__red">
            Confirmar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
