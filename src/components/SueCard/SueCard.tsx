import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import { TextContainer } from './TextContainer.tsx'

export const SueCard = ({title, subtitle, description, background, imgUrl, imgsUrl, buttonText,buttonColor, id, index}) => {
  return (
    <div className='sueCard' style={index === 0 ? {backgroundImage:`url(${background})`} : {backgroundColor:`${background}`}}>
      {
        index === 0 ? (
        
        <Row>
          <Col>
            <DefaultNavbar type={'white'} />
          </Col>
        </Row>): null
      }
      <Row className='align-items-center justify-content-center'>
        { index % 2 === 0 ? (
          <>
          <Col xs={12} md={6}>
            <TextContainer title={title} subtitle={subtitle} description={description} background={background} imgUrl={imgUrl} buttonText={buttonText} buttonColor={buttonColor} id={id} index={index} />
          </Col>
          <Col className="align-items-center">
            <img src={imgUrl} style={{maxWidth: "100%"}}/>
          </Col>
          </>
        ): (
        <>
        <Col className="align-items-center">
          <img src={imgUrl} style={{maxWidth: "100%"}}/>
        </Col>
        <Col xs={12} md={ index === 1 ? 12 : 6}>
          <TextContainer title={title} subtitle={subtitle} description={description} background={background} imgUrl={imgUrl} imgsUrl={imgsUrl} buttonText={buttonText} buttonColor={buttonColor} id={id} index={index} />
        </Col>
        </>
        )}
      </Row>
    </div>
  )
}