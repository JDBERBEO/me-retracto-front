import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { SueCard } from '../components/SueCard/SueCard.tsx'


export const Home = () => {
  const documents = [
    {
      title: 'Lorem ipsum dolor sit', 
      subtitle: 'Lorem ipsum dolor sit amet', 
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh', 
      background:'https://res.cloudinary.com/me-retracto/image/upload/v1653931005/platform%20Imgs/main_xl9nki_nkce93.png', 
      buttonText:'CONÓCENOS',
      imgUrl: 'https://res.cloudinary.com/me-retracto/image/upload/v1653925607/platform%20Imgs/2_2_raambc.png'
    }, 
    {
      title: 'Lorem ipsum dolor sit', 
      subtitle: 'amet, consectetuer adipiscing elit, ',  
      background: 'white',
      imgsUrl: {
        purpleArrow: 'https://res.cloudinary.com/me-retracto/image/upload/v1661998545/platform%20Imgs/purple_arrow_efdtzf.png',
        greenArrow: 'https://res.cloudinary.com/me-retracto/image/upload/v1661999792/platform%20Imgs/green_arrow_iesyrj.png',
        redArrow: 'https://res.cloudinary.com/me-retracto/image/upload/v1661999789/platform%20Imgs/red_arrow_wmfroa.png',
        yellowArrow: 'https://res.cloudinary.com/me-retracto/image/upload/v1661999785/platform%20Imgs/yellow_arrow_zf5gja.png'
      }
    },
    {
      title: 'PUBLICIDAD ENGAÑOSA', 
      subtitle: 'Lorem ipsum dolor sit amet', 
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh', 
      background: '#fab816',
      buttonText: 'IR AL DOCUMENTO',
      imgUrl:'https://res.cloudinary.com/me-retracto/image/upload/v1654053833/platform%20Imgs/a2_1_ax73mo.png',
    },
    { 
      title: 'FALTA DE INFORMACIÓN AL CONSUMIDOR', 
      subtitle: 'Lorem ipsum dolor sit amet', 
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', 
      background: '#eb646f',
      buttonText: 'IR AL DOCUMENTO',
      imgUrl:'https://res.cloudinary.com/me-retracto/image/upload/v1654053822/platform%20Imgs/a3_1_ppqexe.png'
    },
    {
      title: 'Eximentes de responsabilidad', 
      subtitle: 'Lorem ipsum dolor sit amet', 
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', 
      background: '#4e4b99',
      buttonText: 'IR AL DOCUMENTO',
      imgUrl:'https://res.cloudinary.com/me-retracto/image/upload/v1654053830/platform%20Imgs/a4_1_yy5idp.png'
    },
  ]
  return (
    <Container fluid>
    {
      documents.map((document, i)=> {
        return (
          <Row key={i} > 
            <SueCard title={document.title} 
            subtitle={document.subtitle} 
            description={document.description} 
            background={document.background} 
            buttonText={document.buttonText} 
            imgUrl={document.imgUrl}
            imgsUrl={document.imgsUrl}
            index={i}/>
          </Row>
        )
      })
    }
    <Row>
      <Col className='d-flex justify-content-center align-items-center'>
        <div className='sueCard'>
          <h1 className='sueCard__title'>CONTÁCTENOS</h1>
          <h5 className='sueCard__subtitle'>amet, consectetuer adipiscing elit, </h5>
          <p className='sueCard__description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
      </Col>
      <Col >
        <div className='contactenos-box'>
          <input className='contactenos-input' placeholder='Nombre...' />
          <textarea className='form-text-area' placeholder='Mensaje...'/>
          <button className='containerButton__yellow' style={{backgroundColor: '#FAB816', color: 'white'}}>ENVIAR</button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='d-flex justify-content-start align-items-center' xs={12} md={4}>
        <div>
          <h5 className='sueCard_subtitle'>Lorem ipsum dolor sit</h5>
          <p className='sueCard_description'>amet, consectetuer</p>
          <p className='sueCard_description'>adipiscing elit</p>
          <p className='sueCard_description'>adipiscing elit</p>
        </div>
      </Col>
      <Col className='d-flex justify-content-center align-items-center' xs={12} md={4}>
        <div>
          <img 
            src="https://res.cloudinary.com/me-retracto/image/upload/v1653857763/platform%20Imgs/logo_uny6n2.png" 
            alt="main-logo"
            className='defaultNavbar__logo'
          />
        </div>
      </Col>
      <Col className='d-flex justify-content-end align-items-center text-align-right'>
        <div style={{textAlign: 'right'}}>
          <h5 className='sueCard_subtitle'>Lorem ipsum dolor sit</h5>
          <p className='sueCard_description'>amet, consectetuer</p>
          <p className='sueCard_description'>adipiscing elit</p>
          <p className='sueCard_description'>adipiscing elit</p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
