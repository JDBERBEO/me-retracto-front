import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom'


export const  PreventModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        conócenos
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton >
          <Modal.Title className="preventModalTitle">
            <IoIosInformationCircleOutline />
            <h2 className="preventModalTitle__text">IMPORTANTE</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem 
          ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum 
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit 
          amet, consectetuer adipiscing elit, sed diam nonummy nibh
          </p>
          <Link to="/form">
          <Button>
            Continue
          </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
