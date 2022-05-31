import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import '../../assets/styles/components/SueCard.scss'
import '../../assets/styles/components/Button.scss'

export const SueCard = ({title, subtitle, description, imgUrl, buttonText, index}) => {
  return (
    <div className='sueCard' style={{backgroundImage:`url(${imgUrl})`}}>
      {
        index === 0 ? (<Row>
          <Col>
            <DefaultNavbar />
          </Col>
      </Row>): null
      }
      <Row className='align-items-center justify-content-center'>
          <Col xs={12} md={6} lg={6}>
            <div className='sueCard__container'>
              <h1 className='sueCard__title'>{title}</h1>
              <h5 className='sueCard__subtitle'>{subtitle}</h5>
              <p className='sueCard__description'>{description}</p>
              <Link to='/leasingForm'>
                <Button variant="warning" className='buttones__main'>
                {buttonText}
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="align-items-center" xs={12} md={6} lg={6}>
            <img src='https://res.cloudinary.com/me-retracto/image/upload/v1653925607/platform%20Imgs/2_2_raambc.png' style={{maxWidth: "100%"}}/>
          </Col>
      </Row>
    </div>
  )
}