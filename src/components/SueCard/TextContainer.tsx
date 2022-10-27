import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PreventModal } from '../PreventModal.tsx'

export const TextContainer = ({title, subtitle, description, buttonText, buttonColor, id, index, imgsUrl}) => {

  return (
    <>
      { index === 1 ? (
      <div className='stepsDescriptionCard mt-5'>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <Row className='pt-5 mt-5'>
          <Col xs={12} md={3}>
            <img src={imgsUrl.yellowArrow} style={{maxWidth: "50px"}} alt="yellow_arrow"/>
            <h6>ELIGE EL DOCUMENTO SEGÚN TU CASO</h6>
          </Col>
          <Col xs={12} md={3}>
            <img src={imgsUrl.redArrow} style={{maxWidth: "50px"}} alt="red_arrow"/>
            <h6>LLENA LOS ESPACIOS</h6>
          </Col>
          <Col xs={12} md={3}>
          <div>
            <img src={imgsUrl.purpleArrow} style={{maxWidth: "50px"}} alt="purple_arrow"/>
            <h6>UN ABOGADO REVISARÁ TÚ DOCUMENTO</h6>
          </div>
          </Col>
          <Col xs={12} md={3}>
          <div>
            <img src={imgsUrl.greenArrow} style={{maxWidth: "50px"}} alt="green_arrow"/>
            <h6>¡RADICAREMOS LA DEMANDA POR TI Y RECIBIRÁS EL DOCUMENTO A TÚ CORREO!</h6>
          </div>
          </Col>
        </Row>
      </div>): null}
      { index !== 1 ? (<div className={ index === 0 ? 'sueCard' : 'docCard'}>
        <h1 id={`${id}`} className={ index === 0 ? 'sueCard__title' : 'docCard__title'}>{title}</h1>
        <h5 className={ index === 0 ? 'sueCard__subtitle' : 'docCard__subtitle'}>{subtitle}</h5>
        <p className={ index === 0 ? 'sueCard__description' : 'docCard__description'}>{description}</p>
        <PreventModal buttonText={buttonText} buttonColor={buttonColor} index={index} />
      </div>): null}
    </>
  )
}
