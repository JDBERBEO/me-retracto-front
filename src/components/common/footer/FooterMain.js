import React from 'react';
import { Col } from 'react-bootstrap';

export const FooterMain = () => {
  return (
    <>
      <Col className="d-flex justify-content-center align-items-center mt-5 mb-5" xs={12} md={6}>
        <div>
          <h5 className="sueCard_subtitle">Politica de tratamiento de datos</h5>
          <p className="sueCard_description">Cláusula de Responsabilidad</p>
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
