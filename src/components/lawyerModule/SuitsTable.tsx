import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTemplatesAsync, deleteTemplateAsync } from '../../store/features/templates/templatesSlice';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

export const SuitsTable = () => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.templates.templates));
  const [id, setId] = useState('')
  const navigate = useNavigate()

  // console.log('suitsTemplates: ', suitsTemplates)
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

    const handleOnClick = (id) => {
      // dispatch(deleteTemplateAsync(id))
      if(id) {
        navigate(`/EditedClaimForm/${id}`)
      }
    }
    
    const handleOnChange = (e) => {
      console.log('me ejecuté')
      const value = e.target.value
      setId(value)
      if (e.target.checked === false) {
        setId('')
      }
    }
    
    useEffect(() => {
      //getClaims
      dispatch()
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
      {/* <Link to='/EditedClaimForm'> */}
          <button style={{border: 'none', background: 'transparent'}} onClick={() => handleOnClick(id)}>
            <div className='iconBorder'>
              <p className='iconBorder__icon'>+</p>
            </div>
          </button>
      {/* </Link> */}
      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'start', justifyContent:'center'}}>
        {/* <div style={{borderRadius:'50px'}}> */}
          <table>
          <colgroup>
            <col span={1} style={{backgroundColor:'#00AC9E' }} />
            <col style={{backgroundColor:'#EB646F'}} />
          </colgroup>
            <thead>
            <tr>
              <th>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>TIPO DE RECLAMACIÓN</h2>
              </th>
              <th style={{background: '#EB646F'}}>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>FECHA DE DOCUMENTO</h2>
              </th>
            </tr>
            </thead>
            <tbody>
              {suitsTemplates.map((template) => {
                return <tr key={template._id}>
                        <td style={{display:'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center', color: 'white', marginRight:'40px', 
                              marginLeft: '40px', borderBottom: 'solid 1px',}}>
                          <input type="checkbox" value={template._id} onClick={handleOnChange} style={{border: '25px', background:'red', marginTop:'5px'}}></input>
                          <a href={`${template.fileUrl}`} style={{textDecoration: 'none'}} key={template._id}>
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
                              // borderBottom: 'solid 1px',
                              // paddingBottom: '10px'
                            }} >
                              {template.name}
                            </p>
                          </a>
                        </td>
                        <td>
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
                              // borderBottom: 'solid 1px',
                              // paddingBottom: '10px'
                          }} >
                            {new Date(template.createdAt).toDateString()}
                          </p>
                        </td>
                      </tr>
                      })}
            </tbody>
          </table>
        {/* </div> */}
      </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
          
        </div>
    </div >
  )
}
