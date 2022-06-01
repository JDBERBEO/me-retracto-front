import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import '../../assets/styles/components/SueCard.scss'
import '../../assets/styles/components/Button.scss'

export const SueCard = ({title, subtitle, description, background, imgUrl, buttonText, index}) => {
  return (
    <div className='sueCard' style={index === 0 ? {backgroundImage:`url(${background})`} : {backgroundColor:`${background}`}}>
      {
        index === 0 ? (
        
        <Row>
          <Col>
            <DefaultNavbar />
          </Col>
        </Row>): null
      }
      <Row className='align-items-center justify-content-center'>
          <Col xs={12} md={6} lg={6}>
            {/* todo: Make a class document card with white styles */}
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
            <img src={imgUrl} style={{maxWidth: "100%"}}/>
          </Col>
      </Row>
    </div>
  )
}