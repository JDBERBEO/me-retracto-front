import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch } from 'react-redux';

export const StepOne = ({
  // setNewEmail,
  // handleSubmit
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
    email: string().email('El correo es inválido*').required('El correo es requerido*'),
  })

  const uploadState = (data) => {
    console.log('data: ', data)
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  return (

    <Form>
      {/* <pre>{console.log(errors)}</pre> */}
      <section style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:'35vh', width: '100%'}}>
        <div>
          <label className='form-label' >CORREO*</label>
          <input className="form-input" type="email" placeholder="Escribe aqui tu correo electrónico" {...register('email')}/>
        </div>
        <div >
          <span className='form-label'>{errors?.email?.message}</span>
        </div>
      </section>
      <Row className='flex-row-reverse'>
                <Col sm={3}>
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '15px' }}>
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
    </Form>

    
    )
};