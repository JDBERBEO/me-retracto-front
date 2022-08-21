import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string, bool, boolean} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StepFour = ({
  // setNewName,
  // setNewClaimerIDNumber,
  // setNewClaimerCity,
  // setNewClaimerAddress
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep,
  sendEmail
}) => {

  const dispatch = useDispatch()
    const schema = object({
      claimerName: string().required('Este campo es requerido*'),
      claimerIDNumber: string().required('Este campo es requerido*'),
      claimerCity: string().required('Este campo es requerido*'),
      claimerAddress: string().required('Este campo es requerido*'),
    })

    const uploadState = (data) => {
      dispatch(fillClaimAsync(data))
        goNextStep()
      }

    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  return (
    <Form  style={{display:'flex', flexDirection:'column', alignItems: 'start', justifyContent: 'between', marginTop: '4vh', marginBottom:'15vh'}} >
    <div style={{width:'930px', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
    <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <label className='form-label' style={{width: '175px'}}>NOMBRE *</label>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <input className="form-input" type="text" placeholder="Escribe aqui tu nombre" 
          {...register('claimerName')}
          />
        <span className='form-label' style={{marginLeft:'10px'}}>{errors?.claimerName?.message}</span>
      </div>
    </section>
    <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <label className='form-label' style={{width: '175px'}}>NÚMERO DE IDENTIFICACIÓN *</label>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <input className="form-input" type="text" placeholder="Escribe aqui tu documento de identifiación"
          {...register('claimerIDNumber')}
        />
        <span className='form-label' style={{marginLeft:'10px'}}>{errors?.claimerIDNumber?.message}</span>
      </div>
    </section>
    <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <label className='form-label' style={{width: '175px'}}>CIUDAD DE DOMICILIO *</label>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <input className="form-input" type="text" placeholder="Escribe aqui tu la ciudad donde te domicilias" 
          {...register('claimerCity')}
        />
        <span className='form-label' style={{marginLeft:'10px'}}>{errors?.claimerCity?.message}</span>
      </div>
    </section>
    <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom: '80px'}}>
      <label className='form-label' style={{width: '175px'}}>DIRECCIÓN EXACTA *</label>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <input className="form-input" type="text" placeholder="Escribe aqui tu dirección exacta" 
          {...register('claimerAddress')}
        />
        <span className='form-label' style={{marginLeft:'10px'}}>{errors?.claimerAddress?.message}</span>
      </div>
    </section>
    <Row className='align-items-start justify-content-between'>
          <Col sm={2}>
            { i === 0 ? null : (
              <button
                    className="previousStepbutton"
                    onClick={goPreviousStep}
                  >
                    ATRÁS
                  </button>
                  )}
                </Col>
                <Col sm={3}>
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
      </Row>
      </div>
    </Form>
    )
  };