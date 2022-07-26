import React, { useEffect, useState} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../../assets/styles/components/DefaultNavbar.scss'

export const DefaultNavbar = () => {
  const [isAllowed, setstate] = useState(true);

  const logout = () => {
    console.log()
    localStorage.removeItem('admin')
    localStorage.removeItem('lawyer')
  }
  const styleNavDropDownItem = {
    color: "white", 
    fontSize: '15px', 
    fontWeight: 'bold', 
    letterSpacing: '5px', }
  
    const styleNavItem = { 
      color: 'white',
      fontFamily: 'Raleway, sans-serif',
      letterSpacing: '3px',
      fontWeight: 450,
      fontSize: '15px',
      // borderBottom: 'solid 3px'
    }

    const styleNavItemForm = { 
      color: 'black',
      fontFamily: 'Raleway, sans-serif',
      letterSpacing: '3px',
      fontWeight: 450,
      fontSize: '15px',
      // borderBottom: 'solid 3px'
    }


  useEffect(() => {
    let token = localStorage.getItem("lawyer") || localStorage.getItem("admin")
    setstate(token);
  }, []);

  return (
    <Navbar className='defaultNavbar' variant="light">
        <Container>
        <Navbar.Brand href="/"><img src="https://res.cloudinary.com/me-retracto/image/upload/v1653857763/platform%20Imgs/logo_uny6n2.png" alt="logo" className='defaultNavbar__logo'/></Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container className='justify-content-between'>
            <Nav.Link href="/" className='DefaultNavbar__link' style={styleNavItem}>NOSOTROS</Nav.Link>
            <NavDropdown title={<span style={styleNavItem}>DOCUMENTOS</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={styleNavDropDownItem}>Publicidad Engañosa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={styleNavDropDownItem}>Falta de Información al Consumidor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={styleNavDropDownItem}>Retracto y Desistimiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" style={styleNavDropDownItem}>Eximentes de Responsabilidad</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={styleNavItem}>CONTÁCTANOS</Nav.Link>
            { !isAllowed ? <Nav.Link href="/login" style={styleNavItem}>LOGIN</Nav.Link> : <Nav.Link href="/" style={styleNavItem} onClick={logout}>LOGOUT</Nav.Link>}
        </Container>
    </Navbar>
  )
}