import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SueCard = ({title, description}) => {
  return (
    <Row className="HeroContainer align-items-center">
      <Col className='align-items-center'>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to='/leasingForm'>
            <Button>
            got to leasing form
            </Button>
          </Link>
        </div>
      </Col>
      <Col>
        <img src='https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_960_720.jpg' alt='sue text img'/>
      </Col>
    
  </Row>
  )
}