import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap/'
import { useDispatch } from 'react-redux';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';

export const StepFive = ({
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep
}) => {
  const dispatch = useDispatch()

  const schema = object({
    // id: string().required('Este campo es requerido*'),
    documentMonth: string().required('Este campo es requerido*'),
    documentYear: string().required('Este campo es requerido*'),
    facts: string().required('Este campo es requerido*'),
    //TODO: use number validation
    price: string().required('Este campo es requerido')
  })

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  const { register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})

  
  useEffect(() => {
    dispatch(getTemplatesAsync())
  }, [])
  
  
  return (
    <>
    <Col className='d-flex flex-column justify-content-center align-items-center mb-3 mt-3' xs={12}>
      <div style={{marginTop: '40px'}}>
        <label className='form-label' style={{width: '175px'}}>MES PARA EL DOCUMENTO</label>
          <input {...register('documentMonth')} className="form-input" type="text" placeholder="Escribe aqui el mes que aparecerá en el documento"/>
      </div>
      <span className='form-label' style={{marginLeft:'90px', marginTop:'10px'}}>{errors?.documentMonth?.message}</span>
      <div style={{marginTop: '40px'}}>
        <label className='form-label' style={{width: '175px'}}>AÑO PARA EL DOCUMENTO</label>
          <input {...register('documentYear')} className="form-input" type="text" placeholder="Escribe aqui el año que aparecerá en el documento"/>
      </div>
      <span className='form-label' style={{marginLeft:'90px', marginTop:'10px'}}>{errors?.documentYear?.message}</span>
      <div style={{marginTop: '40px'}}>
        <label className='form-label' style={{width: '175px'}}>PRECIO DE LAS PRETENSIONES</label>
          <input {...register('price')} className="form-input" type="text" placeholder="Escribe aqui el precio de tus pretensiones"/>
      </div>
      <span className='form-label' style={{marginLeft:'90px', marginTop:'10px'}}>{errors?.price?.message}</span>
      </Col>
      <Col className='d-flex flex-column justify-content-center align-items-center mb-3 mt-3' xs={12}>
      
      <div style={{marginTop: '40px', marginBottom: '80px'}}>
        <div>
        <label className='form-label' style={{width: '175px'}}>HECHOS*</label>
        <p className="helperText">
          Realice una descripción de lo sucedido enumerando cada una de las situaciones y colocando en el inicio de cada 
          hecho la fecha y lugar, como se muestra en el ejemplo
        </p>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '20PX'}}>
        <span className='form-label'>{errors?.facts?.message}</span>
          <textarea className='form-textArea' 
          placeholder='
          1. 1/2/2011 descripción del hecho
          2. 3/4/2011 descripción del hecho
          3. 5/5/2011 descripción del hecho
          4. 6/6/2011 descripción del hecho'
          {...register('facts')}
          >
          </textarea>
        </div>
      </div>
      </Col >
      <Col xs={6} className='d-flex justify-content-center align-items-start'>
        { i === 0 ? null : (
          <button
            className="previousStepbutton"
            onClick={goPreviousStep}
          >
            ATRÁS
          </button>
        )}
      </Col>
      <Col xs={6}>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>
          <button className={`${step.nextStepButton}`}   onClick={handleSubmit(uploadState)} >
            SIGUIENTE
          </button>
          <div className='stepsContainer' >
            {steps.map((step, i) =>(
              <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
            ))}
          </div>
        </div>
      </Col>
    </>
    )
  };