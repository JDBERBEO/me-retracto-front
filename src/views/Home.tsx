import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { SueCard } from '../components/SueCard.tsx/SueCard.tsx'


export const Home = () => {
  const documents = [
    {title: 'Publicidad Engañosa', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh', imgUrl:''}, 
    {title: 'Falta de información al consumidor', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh'},
    {title: 'Retracto y desistimiento', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh'},
    {title: 'Eximentes de responsabilidad', subtitle: 'Lorem ipsum dolor sit amet', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh'},
  ]
  return (
    <Container>
    <div>hola</div>
    {
      documents.map((document, i)=> {
        return (
          <Row key={i} > 
            <SueCard title={document.title} description={document.description}/>
          </Row>
        )
      })
    }
  </Container>
  )
}
