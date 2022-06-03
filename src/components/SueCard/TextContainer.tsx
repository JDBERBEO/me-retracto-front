import React from 'react'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/styles/components/SueCard.scss'

export const TextContainer = ({title, subtitle, description, background, imgUrl, buttonText, index}) => {
  return (
    <Col xs={12} md={6} lg={6}>
      <div className={ index === 0 ? 'sueCard' : 'docCard'}>
        <h1 className={ index === 0 ? 'sueCard__title' : 'docCard__title'}>{title}</h1>
        <h5 className={ index === 0 ? 'sueCard__subtitle' : 'docCard__subtitle'}>{subtitle}</h5>
        <p className={ index === 0 ? 'sueCard__description' : 'docCard__description'}>{description}</p>
        <Link to='/leasingForm'>
          <Button variant="warning" className='buttones__main'>
          {buttonText}
          </Button>
        </Link>
      </div>
  </Col>
  )
}
