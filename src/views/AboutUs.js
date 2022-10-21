import React from 'react'
import { Row } from 'react-bootstrap'
import { FooterMain } from '../components/common/footer/FooterMain'
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx'

export const AboutUs = () => {
  return (
    <>
      <DefaultNavbar />
      <Row style={{height: '100%'}}>

      </Row>
      <Row className='mt-5'  style={{backgroundColor: '#F3F3F3'}} >
        <FooterMain />
      </Row>  
    </>
  )
}
