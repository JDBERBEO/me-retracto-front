import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch } from 'react-redux';

export const StepThree = ({
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
    defendantName: string().required('Este campo es requerido*'),
    directClaimDate: string().required('Este campo es requerido*'),
  })

  const uploadState = (data) => {
    console.log('data: ', data)
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  const { register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur', resolver: yupResolver(schema)})


  return (
    <Form style={{display:'flex', flexDirection: 'column', alignItems: 'left', marginBottom:'60px'}}>
      <div>
      <p className="helperText" style={{marginTop: '3vh'}}>
      Para poder iniciar el proceso tenga en cuenta que si usted no ha realizado la reclamación directa 
      con el prestador de servicios turísticos no podemos proceder con su reclamación, de acuerdo al
      articulo 58 numeral quinto de la ley 1480 de 2011. 
      </p>
      <section style={{display:'flex', flexDirection: 'column', marginTop: '8vh'}}>
        <label className='form-label'>NOMBRE DEL PRESTADOR O PRESTADORES DE SERVICIOS TURÍSTICOS **</label>
        <div style={{alignItems: 'center', }}>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui el nombre del prestador del servicio" 
          style={{marginTop: '3vh'}}
          // onChange={setNewDefendantName}
          {...register('defendantName')}
          />
          <span className='form-label' style={{marginLeft: '10px'}}>{errors?.defendantName?.message}</span>
        </div>
      </section>
      <section style={{marginTop: '3vh', marginBottom: '60px', display:'flex', flexDirection: 'column'}}>
        <label className='form-label'>FECHA DE LA RECLAMACIÓN DIRECTA *</label>
        <div style={{alignItems: 'center', }}>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui la fecha de la reclamación directa" 
          style={{marginTop: '3vh'}}
          // onChange={setNewDefendantName}
          {...register('directClaimDate')}
          />
          <span className='form-label' style={{marginLeft: '10px'}}>{errors?.directClaimDate?.message}</span>
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
