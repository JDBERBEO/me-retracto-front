import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateClaimAsync } from '../../store/features/claims/claimsSlice';

export const EditedClaimForm = () => {

  const [file, setFile] = useState(null)
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const {id} = useParams()

  console.log('id: ', id)

  const data = new FormData()
  const styleNavDropDownItem = {
    color: "white", 
    fontSize: '15px', 
    fontWeight: 'bold', 
    letterSpacing: '5px', }

    const styleNavItemForm = { 
      color: 'black',
      fontFamily: 'Raleway, sans-serif',
      letterSpacing: '3px',
      fontWeight: 450,
      fontSize: '15px',
      // borderBottom: 'solid 3px'
    }

  function changeFile(e) {
    setFile(e.target.files[0]);
  }

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    const payload = {
      file,
      id
    }

    dispatch(updateClaimAsync(navigate, payload));
  };

  return (
    <div>
      <Navbar className='defaultNavbar' variant="light">
        <Container>
        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/me-retracto/image/upload/v1653857763/platform%20Imgs/logo_uny6n2.png" alt="logo" className='defaultNavbar__logo'/></Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container className='justify-content-between'>
          <Nav.Link href="/" className='DefaultNavbar__link' style={styleNavItemForm}>NOSOTROS</Nav.Link>
            <NavDropdown title={<span style={styleNavItemForm}>DOCUMENTOS</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={styleNavDropDownItem}>Publicidad Engañosa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={styleNavDropDownItem}>Falta de Información al Consumidor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={styleNavDropDownItem}>Retracto y Desistimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" style={styleNavDropDownItem}>Eximentes de Responsabilidad</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#link" style={styleNavItemForm}>CONTÁCTANOS</Nav.Link>
        </Container>
      </Navbar>
      <div  className="formContainer">
      <form>
        <section className="formContainer__section">
          <label className='form-label'>SELECCIONA EL ARCHIVO:</label>
          <input 
            type="file" 
            id="file"
            multiple
            onChange={changeFile}
            style={{color:'white'}}
              />
        </section>
        <section className='formContainer__section' >
          <Link to={'/lawyerClaims'}>
            <button className={'nextStepButton__yellow'} >
              ATRÁS
            </button>
          </Link>
          <button 
            className={'nextStepButton__yellow'}
            onClick={handleOnClick}>
              ENVIAR 
          </button>
        </section>
      </form>
      </div>
    </div>
  )
}

