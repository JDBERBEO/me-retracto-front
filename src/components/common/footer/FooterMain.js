import React from 'react'
import { Col } from 'react-bootstrap'

export const FooterMain = () => {
  return (
    <>
      <Col className='d-flex justify-content-start align-items-center mt-5 mb-5' xs={12} md={4}>
        <div>
          <h5 className='sueCard_subtitle'>Lorem ipsum dolor sit</h5>
          <p className='sueCard_description'>amet, consectetuer</p>
          <p className='sueCard_description'>adipiscing elit</p>
          <p className='sueCard_description'>adipiscing elit</p>
        </div>
      </Col>
      <Col className='d-flex justify-content-center align-items-center mt-5 mb-5' xs={12} md={4}>
        <div>
          <img 
            src="https://res.cloudinary.com/me-retracto/image/upload/v1667914984/platform%20Imgs/reducedLogo_jxkj1w.png" 
            alt="main-logo"
            className='defaultNavbar__logo'
          />
        </div>
      </Col>
      <Col className='d-flex justify-content-end align-items-center text-align-right mt-5 mb-5'>
        <div style={{textAlign: 'right'}}>
          <h5 className='sueCard_subtitle'>Lorem ipsum dolor sit</h5>
          <p className='sueCard_description'>amet, consectetuer</p>
          <p className='sueCard_description'>adipiscing elit</p>
          <p className='sueCard_description'>adipiscing elit</p>
        </div>
      </Col>
    </>
  )
}
