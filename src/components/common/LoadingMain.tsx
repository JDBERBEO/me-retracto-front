import React from 'react'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import { Loader } from './spinner/Loader.tsx'
import { Col, Row } from 'react-bootstrap'
export const LoadingMain = ({variant}) => {
  return (
    <>
      <DefaultNavbar type={'black'} />
      <Row >
        <Col xs={12} className='d-flex flex-column align-items-center justify-content-center'>
          <Loader variant={variant} />
          <p className='sueCard_description'>Cargando...</p>
        </Col>
      </Row>
    </>
  )
}
