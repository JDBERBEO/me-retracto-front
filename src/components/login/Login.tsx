import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Login = () => {
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
    <div className='feedbackContainer' style={{backgroundColor: 'white', width: '100%', height:'50vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

      <div  style={{backgroundColor: 'white', width: '40%', height:'5vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:'#00AC9E', fontSize: '30px'}}>PLATAFORMA</h2>
      </div>
      <div  style={{backgroundColor: '#00AC9E', width: '40%', height:'30vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '25px'}}>
      <section style={{marginTop: '5vh'}}>
            <label className='form-label'>USUARIO</label>
            <input className="form-input" type="email" placeholder="Escribe aqui el mes que aparecerá en el documento" />
          </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label'>CONTRASEÑA</label>
            <input className="form-input" type="email" placeholder="Escribe aqui el año que aparecerá en el documento" />
          </section>
        <Link to='/suitsTemplates'>
          <button style={{backgroundColor: 'white', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'#00AC9E', fontSize: '22px', marginTop:"1vh" }}>
            ENTRAR
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}
