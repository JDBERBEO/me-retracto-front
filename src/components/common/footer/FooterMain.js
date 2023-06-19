import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { HabeasDataModal } from './HabeasDataModal';
import types from '../../../constants/types';

export const FooterMain = () => {
  const [show, setShow] = useState(false);
  const [showLiability, setShowLiability] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const openLiabilityModal = () => {
    setShowLiability(true);
  };
  const closeLiabilityModal = () => {
    setShowLiability(false);
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
            isLiability={false}
          />
          <p
            className="sueCard_description"
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={openLiabilityModal}>
            {types.footer.liabilityClause.link}
          </p>
          <HabeasDataModal
            openModal={openLiabilityModal}
            show={showLiability}
            closeModal={closeLiabilityModal}
            types={types}
            isLiability={true}
          />
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
