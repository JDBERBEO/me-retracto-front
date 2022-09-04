import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export const  PreventModal = ({buttonText, index}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button 
        className={index === 0? "mainCardButton" : "nextStepButton__yellow"} 
        onClick={() => setShow(true)}
      >
        {buttonText}
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
                <h2 className="preventModalTitle__text">IMPORTANTE</h2>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem 
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum 
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit 
            amet, consectetuer adipiscing elit, sed diam nonummy nibh
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/form">
            <button className="containerButton__red">
              Continuar
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
