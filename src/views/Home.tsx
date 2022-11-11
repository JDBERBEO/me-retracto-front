import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { FooterMain } from '../components/common/footer/FooterMain';
import { ContactUs } from '../components/contactUs/ContactUs.tsx';
import { SueCard } from '../components/SueCard/SueCard.tsx';

export const Home = () => {
  const documents = [
    {
      title: 'Lorem ipsum dolor sit',
      subtitle: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh',
      background:
        'https://res.cloudinary.com/me-retracto/image/upload/v1653931005/platform%20Imgs/main_xl9nki_nkce93.png',
      buttonText: 'CONÓCENOS',
      buttonColor: 'mainCardButton',
      imgUrl:
        'https://res.cloudinary.com/me-retracto/image/upload/v1653925607/platform%20Imgs/2_2_raambc.png'
    },
    {
      title: 'Lorem ipsum dolor sit',
      subtitle: 'amet, consectetuer adipiscing elit, ',
      background: 'white',
      imgsUrl: {
        purpleArrow:
          'https://res.cloudinary.com/me-retracto/image/upload/v1661998545/platform%20Imgs/purple_arrow_efdtzf.png',
        greenArrow:
          'https://res.cloudinary.com/me-retracto/image/upload/v1661999792/platform%20Imgs/green_arrow_iesyrj.png',
        redArrow:
          'https://res.cloudinary.com/me-retracto/image/upload/v1661999789/platform%20Imgs/red_arrow_wmfroa.png',
        yellowArrow:
          'https://res.cloudinary.com/me-retracto/image/upload/v1661999785/platform%20Imgs/yellow_arrow_zf5gja.png'
      },
      buttonColor: ''
    },
    {
      title: 'PUBLICIDAD ENGAÑOSA',
      subtitle: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
      background: '#fab816',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__yellow',
      imgUrl:
        'https://res.cloudinary.com/me-retracto/image/upload/v1654053833/platform%20Imgs/a2_1_ax73mo.png',
      id: 'misleadingAdvertisement'
    },
    {
      title: 'FALTA DE INFORMACIÓN AL CONSUMIDOR',
      subtitle: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh',
      background: '#eb646f',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__red',
      imgUrl:
        'https://res.cloudinary.com/me-retracto/image/upload/v1654053822/platform%20Imgs/a3_1_ppqexe.png',
      id: 'missingInfo'
    },
    {
      title: 'DERECHO DE RETRACTO',
      subtitle: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh',
      background: '#4e4b99',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__purple',
      imgUrl:
        'https://res.cloudinary.com/me-retracto/image/upload/v1654053830/platform%20Imgs/a4_1_yy5idp.png',
      id: 'withdrawalRight'
    }
  ];
  return (
    <Container fluid>
      {documents.map((document, i) => {
        return (
          <Row key={i}>
            <SueCard
              title={document.title}
              subtitle={document.subtitle}
              description={document.description}
              background={document.background}
              buttonText={document.buttonText}
              buttonColor={document.buttonColor}
              imgUrl={document.imgUrl}
              imgsUrl={document.imgsUrl}
              id={document.id}
              index={i}
            />
          </Row>
        );
      })}
      <Row className="mt-5">
        <ContactUs />
      </Row>
      <Row className="mt-5" style={{ backgroundColor: '#F3F3F3' }}>
        <FooterMain />
      </Row>
    </Container>
  );
};
