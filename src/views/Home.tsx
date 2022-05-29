import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { SueCard } from '../components/SueCard.tsx/SueCard.tsx'


export const Home = () => {
  const documents = [
    {title: 'Lorem ipsum dolor sit', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh', imgSource:'https://res.cloudinary.com/me-retracto/image/upload/v1653857359/platform%20Imgs/main_xl9nki.png', buttonText:'Conócenos'}, 
    {title: 'Falta de información al consumidor', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', imgSource:'https://res.cloudinary.com/me-retracto/image/upload/v1653857368/platform%20Imgs/misleadingAd_opdtbn.png'},
    {title: 'Retracto y desistimiento', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', imgSource:'https://res.cloudinary.com/me-retracto/image/upload/v1653857381/platform%20Imgs/missingInfo_wipsde.png'},
    {title: 'Eximentes de responsabilidad', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', imgSource:'https://res.cloudinary.com/me-retracto/image/upload/v1653857379/platform%20Imgs/withdrawal_jev97n.png'},
  ]
  return (
    <Container>
    {
      documents.map((document, i)=> {
        return (
          <Row key={i} > 
            <SueCard title={document.title} subtitle={document.subtitle} description={document.description} imgUrl={document.imgSource} buttonText={document.buttonText} index={i}/>
          </Row>
        )
      })
    }
  </Container>
  )
}
