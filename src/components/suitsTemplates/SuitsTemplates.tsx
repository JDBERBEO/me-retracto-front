import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showSuitsTemplates, getClaimsSuitsAsync } from '../../store/features/claims/claimsSlice';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export const SuitsTemplates = () => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.claims.claimsTemplates));

  console.log('suitsTemplates: ', suitsTemplates)
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


  useEffect(() => {
    dispatch(getClaimsSuitsAsync())
  }, []);

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
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'right', paddingRight:'340px'}}>
        <div className="stepNumberContainer">
          <div className='iconBorder'>
            <p className='iconBorder__icon'><MdOutlineModeEditOutline /></p>
          </div>
        </div>
        <div className="stepNumberContainer">
          <div className='iconBorder'>
            <p className='iconBorder__icon'><RiDeleteBin6Line /></p>
          </div>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'start', justifyContent:'center'}}>
        <div style={{background: '#4E4B99', borderRadius:'50px'}}>
          <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>TIPO DE DOCUMENTO</h2>
          {suitsTemplates.map((template, i) => {
            console.log('template: ', template)
            return <a href={`${template.fileUrl}`} style={{textDecoration: 'none'}}>
                <p 
                  style={{
                    fontFamily: 'Raleway, sans-serif',  
                    textAlign: 'center', 
                    fontWeight: 400, 
                    fontSize: '15px', 
                    letterSpacing: '1px', 
                    color: 'white',
                    marginRight:'40px', 
                    marginLeft: '40px',
                    borderBottom: 'solid 1px',
                    paddingBottom: '10px'
                  }} key={i}> {template.name}</p>
              </a>
          })}
        </div>
        <div style={{background: '#EB646F', borderRadius:'50px'}}>
          <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>FECHA DE DOCUMENTO</h2>
          {suitsTemplates.map((template, i) => {
            console.log('template: ', template)
            return <a href={`${template.fileUrl}`} style={{textDecoration: 'none'}}>
              <p 
              style={{
                fontFamily: 'Raleway, sans-serif',  
                textAlign: 'center', 
                fontWeight: 400, 
                fontSize: '15px', 
                letterSpacing: '1px', 
                color: 'white',
                marginRight:'40px', 
                marginLeft: '40px',
                borderBottom: 'solid 1px',
                paddingBottom: '10px'
              }} key={i}> {template.createdAt}</p>
            </a>
          })}
        </div>
      </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
          <Link to='/templateForm'>
          <button style={{border: 'none', background: 'transparent'}}>
            <div className='iconBorder'>
              <p className='iconBorder__icon'>+</p>
            </div>
          </button>
          </Link>
        </div>
    </div >
  )
}
