import React from 'react';
import { Row } from 'react-bootstrap';
import { FooterMain } from '../components/common/footer/FooterMain';
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx';
import typesAboutUs from '../constants/typesAboutUs';

export const AboutUs = () => {
  return (
    <>
      <DefaultNavbar />
      <Row style={{ height: '100%' }}>
        <div className="stepsDescriptionCard">
          <h1>{typesAboutUs.title}</h1>
          <p>{typesAboutUs.text}</p>
        </div>
      </Row>
      <Row className="mt-5" style={{ backgroundColor: '#F3F3F3' }}>
        <FooterMain />
      </Row>
    </>
  );
};
