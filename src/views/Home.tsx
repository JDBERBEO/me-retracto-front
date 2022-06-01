import React from 'react'
import { Row, Container } from 'react-bootstrap'
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
      title: 'Falta de información al consumidor', 
      subtitle: 'Lorem ipsum dolor sit amet', 
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', 
      background: '#fab816',
      buttonText: 'IR AL DOCUMENTO',
      imgUrl:'https://res.cloudinary.com/me-retracto/image/upload/v1654053833/platform%20Imgs/a2_1_ax73mo.png',
    },
    { 
      title: 'Retracto y desistimiento', 
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
            index={i}/>
          </Row>
        )
      })
    }
  </Container>
  )
}
