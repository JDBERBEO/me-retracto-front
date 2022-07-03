import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const TemplateForm = () => {

  const [file, setFile] = useState(null)
  const [newTemplate, setTemplate] = useState({
    name: '',
    internalCode:''
  });
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

  // const data = New FormData()
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

  function changeProfilePhoto(e) {
    setFile(e.target.files[0]);
  }

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('newTemplate: ', newTemplate)

  
    // dispatch(postClaimAsync(navigate, {claimFields: newClaim}));
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
      <div  style={{backgroundColor: '#FAB816', width: '40%', height:'30vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '25px'}}>
      <form>
        <section>
          <label className='form-label'>NOMBRE DEL FORMATO</label>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui el nombre de tu nuevo formato de demanda"
          onChange={(e) => setTemplate({ ...newTemplate, name: e.target.value })} />
        </section>
        <section>
          <label className='form-label'>CÓDIGO INTERNO</label>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui el código interno"
          onChange={(e) => setTemplate({ ...newTemplate, internalCode: e.target.value })}
          />
        </section>
        <section>
          <label>Select a file:</label>
          <input 
            type="file" 
            id="file"
            multiple
            onChange={changeProfilePhoto}
              />
        </section>
        <section>
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

