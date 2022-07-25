import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate,  } from 'react-router-dom'
import { postLoginAsync } from '../../store/features/admin/adminSlice'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // const {email, password } = user
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

  const handleOnChange = (e) => {
    const {name, value } = e.target
    console.log('value: ', value)
    console.log('name: ', name)
    setUser({
      ...user,
      [name]:value
    })
    console.log('user: ', user)
  }

  const handleOnSubmit = (user) => {
    // e.preventDefault()
    dispatch(postLoginAsync(user, navigate))
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
    <div className='feedbackContainer' style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: '20px', margin: '20px', borderRadius: '50px'}}>

      <div  style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: "50px", padding:'5px'}}>
        <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:'white', fontSize: '30px'}}>LOGIN</h2>
      </div>
      <form  onSubmit={(e) => {
        e.preventDefault()
        handleOnSubmit(user)
        }} style={{backgroundColor: '#00AC9E', width: '40%', height:'30vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: '40px'}}>
        <section style={{marginTop: '5vh'}}>
          <label className='form-label' htmlFor='email'>EMAIL</label>
          <input onChange={handleOnChange} className="form-input" id="email" name="email" value={user.email} type="text" placeholder="Escribe aqui el nombre de usuario registrado" />
        </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label' htmlFor='password'>CONTRASEÑA</label>
            <input onChange={handleOnChange} className="form-input" id="password" name="password" value={user.password} type="password" placeholder="Escribe aqui la contraseña" />
          </section>
        {/* <Link to='/suitsTemplates'> */}
          <button style={{backgroundColor: 'white', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'#00AC9E', fontSize: '22px', marginTop:"20px" }}>
            ENTRAR
          </button>
        {/* </Link> */}
      </form>
    </div>
    </>
  )
}
