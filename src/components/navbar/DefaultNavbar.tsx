import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../../assets/styles/components/DefaultNavbar.scss'

export const DefaultNavbar = () => {
  const styleNavDropDownItem = {
    color: "white", 
    fontSize: '15px', 
    fontWeight: 'bold', 
    letterSpacing: '5px', }

  return (
    <Navbar className='defaultNavbar' variant="light">
        <Container>

        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/me-retracto/image/upload/v1653857763/platform%20Imgs/logo_uny6n2.png" alt="logo" className='defaultNavbar__logo'/></Navbar.Brand>
        </Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container className='justify-content-center'>
          <Nav className='justify-content-space-around'>
            <Nav.Link href="/" className='DefaultNavbar__link' style={{color: "white"}}>Nosotros</Nav.Link>
            <NavDropdown title={<span style={{color: 'white'}}>Documentos</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={styleNavDropDownItem}>Publicidad Engañosa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={styleNavDropDownItem}>Falta de Información al Consumidor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={styleNavDropDownItem}>Retracto y Desistimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" style={styleNavDropDownItem}>Eximentes de Responsabilidad</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{color: "white"}}>Contáctanos</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}