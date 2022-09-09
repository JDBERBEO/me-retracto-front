import React, { useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string, bool, boolean} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StepSix = ({
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
    proofs: string().required('Este campo es requerido*')
  })

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data))
    }

    const sendClaim =  (data, e) => {
      const completedClaim = {
        ...data,
        ...filledClaim
      }

      dispatch(postClaimAsync(navigate, completedClaim, sendEmail, e))
      uploadState(data)
    }
    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  return (
    <>
    <Col className='d-flex flex-column justify-content-start align-items-start mb-3 mt-3 ms-3' xs={12}>
      <label className='form-label'>DESCRIBA LOS DOCUMENTOS QUE SOPORTAN ESTE RECLAMO. *</label>
      <label className='helperText'>Por favor guarde cada archivo con su nombre. Tenga en cuenta que se permiten máximo 10 archivos.</label>
    </Col>
    <Col className='d-flex flex-column justify-content-center align-items-center mb-5 mt-5' xs={12}>
      <input {...register('proofs')} className="form-input" type="text" placeholder="Escribe aqui el año que aparecerá en el documento" />
        <span className="form-label">
          {errors?.proofs?.message}
        </span>
    </Col>
    <Col xs={6}>
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
        <button className={`${step.nextStepButton}`}  onClick={handleSubmit(sendClaim)} >
          ENVIAR
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