import React, { useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string, bool, boolean} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StepSix = ({
  // setNewProofs
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
  const navigate = useNavigate()
  const filledClaim = useSelector((state) => (state.claims.filledClaim));

  const schema = object({
    proofs: string().required('Se requiere agregar las pruebas')
  })

  const uploadState = (data) => {
    console.log('data: ', data)
    dispatch(fillClaimAsync(data))
    // if(i + 1 !== steps.length) {
    //   goNextStep()
    // }
    }

    const sendClaim =  (data, e) => {
      console.log('data StepTwo: ', data)
      console.log('filledClaim: ', filledClaim)
      console.log('e', e)
      const completedClaim = {
        ...data,
        ...filledClaim
      }

      console.log('completedClaim: ', completedClaim)
      dispatch(postClaimAsync(navigate, filledClaim, sendEmail, e))
      uploadState(data)
    }
    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

    console.log('errors: ', errors)

  return (
    <Form>
      <section>
        <label className='form-label'>ADJUNTE LOS DOCUMENTOS QUE SOPORTAN ESTE RECLAMO. *</label>
        <label className='helperText'>Por favor guarde cada archivo con su nombre. Tenga en cuenta que se permiten máximo 10 archivos.</label>
        <input {...register('proofs')} className="form-input" type="text" placeholder="Escribe aqui el año que aparecerá en el documento" />
        <span style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'center', fontWeight: 700, fontSize: '11px', letterSpacing: '1px', color: 'white', marginTop: '7vh', marginBottom: '8vh',}}>{
        errors?.proofs?.message}</span>
      </section>
      <Row className='align-items-end justify-content-between'>
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
                  <button className={`${step.nextStepButton}`}  onClick={handleSubmit(sendClaim)} >
                    ENVIAR
                  </button>
                  <div className='stepsContainer' >
                  {steps.map((step, i) =>(
                  <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
                  ))}
                  </div>
                </Col>
      </Row>
    </Form>
    )
  };