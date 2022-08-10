import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTemplatesAsync, deleteTemplateAsync } from '../../store/features/templates/templatesSlice';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';

export const SuitsTemplates = () => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.templates.templates));
  const [id, setId] = useState('')


    const handleOnClick = (id) => {
      dispatch(deleteTemplateAsync(id))
      setId('')
    }
    
    const handleOnChange = (e) => {
      const value = e.target.value
      setId(value)
      if (e.target.checked === false) {
        setId('')
      }
    }
    
    useEffect(() => {
      dispatch(getTemplatesAsync())
    }, []);
  return (
    <div>
      <DefaultNavbar />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'right', paddingRight:'340px'}}>
      <Link to='/templateForm'>
          <button style={{border: 'none', background: 'transparent'}}>
            <div className='iconBorder'>
              <p className='iconBorder__icon'>+</p>
            </div>
          </button>
          </Link>
        <div className="stepNumberContainer">
          <div className='iconBorder'>
            <button className='iconBorder__icon' style={{backgroundColor: 'transparent', border:'none'}} onClick={() => handleOnClick(id)}><RiDeleteBin6Line /></button>
          </div>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'start', justifyContent:'center'}}>
          <table>
          <colgroup>
            <col span={1} style={{backgroundColor:'#4E4B99' }} />
            <col style={{backgroundColor:'#EB646F'}} />
          </colgroup>
            <thead>
            <tr>
              <th>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>TIPO DE DOCUMENTO</h2>
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
                          }} >
                            {new Date(template.createdAt).toDateString()}
                          </p>
                        </td>
                      </tr>
                      })}
            </tbody>
          </table>
      </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
          
        </div>
    </div >
  )
}
