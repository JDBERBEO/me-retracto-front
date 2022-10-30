import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getOneClaimAsync, updateClaimAsync, updateClaimStatusAsync } from '../../store/features/claims/claimsSlice';
import { FeedbackModal } from '../common/feedbackModal/FeedbackModal.tsx';
import { Loader } from '../common/spinner/Loader.tsx';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { ConfimationModal } from '../common/confirmationModal/ConfirmationModal.tsx';

export const EditedClaimForm = () => {

  const [file, setFile] = useState(null)
  const selectFileRef= useRef(null)
  const dispatch = useDispatch<any>()
  const loading = useSelector((state) => state.claims.loading)
  const navigate = useNavigate()
  const {id} = useParams()

  const schema = object({
    claimStatus: string().required('El campo es requerido*'),
  })

  const { register, setValue, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
  
  const handleOnClickFile = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const payload = {
      file,
      id
    }
    dispatch(updateClaimAsync(payload));
    selectFileRef.current.value = null
    setFile(null)
  };
  
  const handleOnClickStatus = (data, e) => {
    e.preventDefault()
    const payload = {
      status: data.claimStatus,
      id
    }
    dispatch(updateClaimStatusAsync(navigate, payload))
  }
  
  function changeFile(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <DefaultNavbar />
      <FeedbackModal />
        { loading ? <Loader variant={'warning'} />: null }    
        <form>
          <div  className="formContainer">
            <section className="formContainer__section-column">
              <label className='form-label'>SELECCIONA EL ARCHIVO:</label>
              <input 
                  ref={selectFileRef}
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
                onClick={handleOnClickFile}>
                ACTUALIZAR
              </button>
            </section>
          </div>
        </form>
        <form>
          <div  className="formContainerPurple">
            <section className="formContainer__section-column">
              <label className='form-label' htmlFor='userType'>SELECCIONA EL ESTADO </label>
              <select  
                className="form-input" 
                id="claimStatus" 
                {...register('claimStatus')} 
                onChange={(e) => setValue('claimStatus', e.target.value, { shouldValidate: true })} 
                >
                <option value="">selecciona una opción...</option>
                <option value={"notChecked"}>Sin revisar</option>
                <option value={"underStudy"}>En revisión</option>
                <option value={"analysisCompleted"}>Revisión Finalizada</option>
              </select>
              <span className='form-label'>{errors?.claimStatus?.message}</span>
          
            </section>
            <section className='formContainer__section' >
              <Link to={'/lawyerClaims'}>
                <button className={'nextStepButton__yellow'} >
                  ATRÁS
                </button>
              </Link>
              <button 
                className={'nextStepButton__yellow'}
                onClick={handleSubmit(handleOnClickStatus)}>
                  ACTUALIZAR 
              </button>
            </section>
          </div>
        </form>
          <div  className="formContainer">
            <section className='formContainer__section' >
              <ConfimationModal claimId={id} />
            </section>
          </div>
    </div>
  )
}

