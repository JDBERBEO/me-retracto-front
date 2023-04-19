import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { FooterMain } from '../components/common/footer/FooterMain';
import { ContactUs } from '../components/contactUs/ContactUs.tsx';
import { SueCard } from '../components/SueCard/SueCard.tsx';

export const Home = () => {
  const documents = [
    {
      title: 'Tienes una reclamación contra tu aerolínea o agente de viajes?',
      subtitle:
        'En Me retracto.com tenemos un equipo que está dispuesto a ayudarte en tu reclamación de inmediato y es muy sencillo.',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh',
      background:
        'https://res.cloudinary.com/me-retracto/image/upload/v1653931005/platform%20Imgs/main_xl9nki_nkce93.png',
      buttonText: 'CONÓCENOS',
      buttonColor: 'mainCardButton',
      imgUrl: 'https://res.cloudinary.com/me-retracto/image/upload/v1671555074/a1_jxqite.png'
    },
    {
      title: '¿Quieres saber como funciona?',
      subtitle:
        'Me retracto es una plataforma por medio de la cual se ofrece a los consumidores la posibilidad de entablar una acción de protección al consumidor bajo la asesoría de un abogado para radicar la demanda y que la misma tenga los requisitos de forma y de fondo exigidos por la ley. Lo hacemos por ti de una  forma muy sencilla y práctica. Solo necesitas presentar tu queja directamente al prestador de servicios y enviarnos el radicado, con esto y con  tus respuestas a nuestro formulario podremos radicar por ti la demanda en la Superintendencia de Industria y comercio. Recuerda que no necesitas un abogado para la audiencia única, a la cual puedes asistir en tu propia representación o puedes elegirnos y te brindaremos el acompañamiento por un valor adicional.',
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
        'Si has recibido o has visto anuncios o publicidad y la aerolínea o agencia de viajes no cumple o lo ofrecido no corresponde a la realidad. Haz click aquí.',
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
        'Si antes, durante o después de tu compra, la aerolínea o la agencia de viajes no dio la información completa, veraz y/o oportuna respecto a tu viaje. Haz click aquí.',
      background: '#eb646f',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__red',
      imgUrl: 'https://res.cloudinary.com/me-retracto/image/upload/v1671555054/a3_lzlez9.png',
      id: 'missingInfo'
    },
    {
      title: 'DERECHO DE RETRACTO',
      subtitle: 'Lorem ipsum dolor sit amet',
      description:
        'Si realizaste una compra por medios electrónicos , teléfono correo electrónico o catalogo aún faltan 5 días para tu viaje, y estás dentro de los 5 días siguientes a la compra de tus tiquetes y no puedes viajar. Haz click aqui',
      background: '#4e4b99',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__purple',
      imgUrl: 'https://res.cloudinary.com/me-retracto/image/upload/v1671555053/a4_gnb1ym.png',
      id: 'withdrawalRight'
    },
    {
      title: 'FUERZA MAYOR O CASO FORTUITO O IMPOSIBILIDAD PARA VIAJAR PROBADA',
      subtitle: 'Lorem ipsum dolor sit amet',
      description:
        'Si tienes una incapacidad o documento medico, o algún otro tipo de documento por medio del cual se pueda probar la imposibilidad para viajar. Haz click aquí.',
      background: '#00AC9E',
      buttonText: 'INICIA TU DEMANDA',
      buttonColor: 'containerButton__size-m__green',
      imgUrl: 'https://res.cloudinary.com/me-retracto/image/upload/v1671555052/a5_lbrflc.png',
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
