import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getClaimsAsync } from '../../store/features/claims/claimsSlice';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { claimsStatusTraductor } from '../../helpers/claimsStatusTraductor';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';

export const SuitsTable = () => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.claims.claims));
  const [id, setId] = useState('')
  const navigate = useNavigate()

    const handleOnClick = (id) => {
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
      dispatch(getClaimsAsync())
    }, []);

  return (
    <div>
      <DefaultNavbar />
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
            <col span={2} style={{backgroundColor:'#00AC9E' }} />
            <col style={{backgroundColor:'#00AC9E'}} />
            <col style={{backgroundColor:'#00AC9E'}} />
          </colgroup>
            <thead>
            <tr>
              <th>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>TIPO DE RECLAMACIÓN</h2>
              </th>
              <th style={{background: '#00AC9E'}}>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>FECHA DE DOCUMENTO</h2>
              </th>
              <th style={{background: '#00AC9E'}}>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>PARTES</h2>
              </th>
              <th style={{background: '#00AC9E'}}>
                <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 800, color:'white', fontSize: '30px', paddingRight:'40px', paddingLeft: '40px'}}>ESTADO</h2>
              </th>
            </tr>
            </thead>
            <tbody>
              {suitsTemplates.map((template) => {
                console.log('template: ', template)
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
                          }} >
                            {new Date(template.createdAt).toDateString()}
                          </p>
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
                            Demandado:{template.defendant}<br/>
                            Demandante: {template.claimer}
                          </p>
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
                            { template.status ? claimsStatusTraductor(template.status): ""}
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
