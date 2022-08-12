import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateClaimAsync, updateClaimStatusAsync } from '../../store/features/claims/claimsSlice';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';

export const EditedClaimForm = () => {

  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('notChecked')
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const {id} = useParams()

  function changeFile(e) {
    setFile(e.target.files[0]);
  }

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    
    const payload = {
      file,
      id
    }

    dispatch(updateClaimAsync(navigate, payload));
  };

  const handleOnChange = (e) => {
    const { value } = e.target
    setStatus(value)
  }

  const handleOnClickStatus = (e) => {
    e.preventDefault()
    const payload = {
      status,
      id
    }
    dispatch(updateClaimStatusAsync(navigate, payload))
  }
  return (
    <div>
      <DefaultNavbar />
        <div  className="formContainer">
            <form>
              <section className="formContainer__section-column">
                <label className='form-label'>SELECCIONA EL ARCHIVO:</label>
                <input 
                  type="file" 
                  id="file"
                  multiple
                  onChange={changeFile}
                  style={{color:'white'}}
                    />
              </section>
              <section className='formContainer__section-column'>
                <button 
                  className={'nextStepButton__yellow'}
                  onClick={handleOnClick}>
                    ACTUALIZAR
                </button>
              </section>
            </form>
        </div>
      <div  className="formContainerPurple">
      <form>
        <section className="formContainer__section-column">
          <label className='form-label' htmlFor='userType'>SELECCIONA EL ESTADO </label>
          <select  onChange={handleOnChange} className="form-input" id="userType" name="userType" value={user.userType} >
            <option>selecciona una opción...</option>
            <option value={"notChecked"}>Sin revisar</option>
            <option value={"underStudy"}>En revisión</option>
            <option value={"analysisCompleted"}>Revisión Finalizada</option>
          </select>
        </section>
        <section className='formContainer__section' >
          <Link to={'/lawyerClaims'}>
            <button className={'nextStepButton__yellow'} >
              ATRÁS
            </button>
          </Link>
          <button 
            className={'nextStepButton__yellow'}
            onClick={handleOnClickStatus}>
              ACTUALIZAR 
          </button>
        </section>
      </form>
      </div>
      <div  className="formContainer">
        <form>
          <section className='formContainer__section' >
            <button>
              ENVIAR DOCUMENTO A USUARIO
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}

