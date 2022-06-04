import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
// import '../../assets/styles/components/Button.scss'
import { TextContainer } from './TextContainer.tsx'

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
        { index % 2 === 0 ? (
          <>
          <TextContainer title={title} subtitle={subtitle} description={description} background={background} imgUrl={imgUrl} buttonText={buttonText} index={index} />
          <Col className="align-items-center" xs={12} md={6} lg={6}>
            <img src={imgUrl} style={{maxWidth: "100%"}}/>
          </Col>
          </>
        ): (
        <>
        <Col className="align-items-center" xs={12} md={6} lg={6}>
          <img src={imgUrl} style={{maxWidth: "100%"}}/>
        </Col>
        <TextContainer title={title} subtitle={subtitle} description={description} background={background} imgUrl={imgUrl} buttonText={buttonText} index={index} />
        </>
        )}
      </Row>
    </div>
  )
}