import React from 'react'
import { Col } from 'react-bootstrap'
import  Button  from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

// import '../../assets/styles/components/SueCard.scss'

export const TextContainer = ({title, subtitle, description, buttonText, index}) => {
  return (
    <Col xs={12} md={6} lg={6}>
      <div className={ index === 0 ? 'sueCard' : 'docCard'}>
        <h1 className={ index === 0 ? 'sueCard__title' : 'docCard__title'}>{title}</h1>
        <h5 className={ index === 0 ? 'sueCard__subtitle' : 'docCard__subtitle'}>{subtitle}</h5>
        <p className={ index === 0 ? 'sueCard__description' : 'docCard__description'}>{description}</p>
        <Link to='/leasingForm'>
          < Button bsPrefix={ index === 0 ? 'mainCardButton': 'sueCardButton'} >
          {buttonText}
          </Button>
        </Link>
      </div>
  </Col>
  )
}
