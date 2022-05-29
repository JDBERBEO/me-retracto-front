import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../../assets/styles/components/DefaultNavbar.scss'

export const DefaultNavbar = () => {
  return (
    <Navbar className='DefaultNavbar' variant="light">
      <Container>
        <Navbar.Brand href="#home">Me Retracto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='DefaultNavbar__link'>Nosotros</Nav.Link>
            <NavDropdown title="Documentos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Publicidad Engañosa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Falta de Información al Consumidor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Retracto y Desistimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Eximentes de Responsabilidad</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}