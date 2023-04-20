import { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { FiAlertCircle } from 'react-icons/fi';
import { HabeasDataModal } from './HabeasDataModal';
import types from '../../../constants/types';

export const FooterMain = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Col className="d-flex justify-content-center align-items-center mt-5 mb-5" xs={12} md={6}>
        <div>
          <h5
            className="sueCard_subtitle"
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={openModal}>
            {types.footer.habeasData.link}
          </h5>
          <HabeasDataModal
            openModal={openModal}
            show={show}
            closeModal={closeModal}
            types={types}
          />
          <p
            className="sueCard_description"
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Cláusula de Responsabilidad
          </p>
          <p className="sueCard_description"></p>
          <p className="sueCard_description"></p>
        </div>
      </Col>
      <Col
        className="d-flex justify-content-center align-items-center  text-align-right mt-5 mb-5"
        xs={12}
        md={6}>
        <div>
          <img
            src="https://res.cloudinary.com/me-retracto/image/upload/v1671555730/logo2_y4qhnd.png"
            alt="main-logo"
            className="defaultNavbar__logo"
          />
        </div>
      </Col>
      <Col className="d-flex justify-content-end align-items-center text-align-right" style={{}}>
        <div style={{ textAlign: 'right', display: 'none' }}>
          <h5 className="sueCard_subtitle">Lorem ipsum dolor sit</h5>
          <p className="sueCard_description">amet, consectetuer</p>
          <p className="sueCard_description">adipiscing elit</p>
          <p className="sueCard_description">adipiscing elit</p>
        </div>
      </Col>
    </>
  );
};
