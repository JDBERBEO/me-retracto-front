import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { ErrorHandler } from '../common/ErrorHandler.tsx';

export const FeedbackMain = () => {
  const {claims, templates, }: any  = useSelector((state) => (state));

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

  return (
    <>
    <Navbar className='defaultNavbar' variant="light">
      <Container>
      <Navbar.Brand href="/"><img src="https://res.cloudinary.com/me-retracto/image/upload/v1653857763/platform%20Imgs/logo_uny6n2.png" alt="logo" className='defaultNavbar__logo'/></Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container className='justify-content-between'>
        {/* <Nav className='justify-content-space-around'> */}
          <Nav.Link href="/" className='DefaultNavbar__link' style={styleNavItemForm}>NOSOTROS</Nav.Link>
          <NavDropdown title={<span style={styleNavItemForm}>DOCUMENTOS</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" style={styleNavDropDownItem}>Publicidad Engañosa</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" style={styleNavDropDownItem}>Falta de Información al Consumidor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" style={styleNavDropDownItem}>Retracto y Desistimiento</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" style={styleNavDropDownItem}>Eximentes de Responsabilidad</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" style={styleNavItemForm}>CONTÁCTANOS</Nav.Link>
        {/* </Nav> */}
      </Container>
    </Navbar>
    {
    claims.error || templates.error ? <ErrorHandler />: (<div className='feedbackContainer' style={{backgroundColor: '#FAB816', width: '100%', height:'90vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:'white', fontSize: '30px'}}>HAZ LLENADO TU SOLICITUD CORRECTAMENTE</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
    <Link to='/'>
      <button style={{backgroundColor: 'transparent', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'white', fontSize: '22px' }}>
      VOLVER A LA PÁGINA INICIAL
      </button>
    </Link>
  </div>) 
    }
    </>
  )
}
