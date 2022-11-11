import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { object, string, bool, boolean } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StepFour = ({
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep,
  sendEmail
}) => {
  const dispatch = useDispatch();
  const schema = object({
    claimerName: string().required('Este campo es requerido*'),
    claimerIdNumber: string().required('Este campo es requerido*'),
    claimerCity: string().required('Este campo es requerido*'),
    claimerAddress: string().required('Este campo es requerido*'),
    claimerEmail: string().email('El correo es inválido*').required('El correo es requerido*')
  });

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data));
    goNextStep();
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      claimerName: 'manglar',
      claimerIdNumber: '1024863',
      claimerCity: 'bogotá',
      claimerAddress: 'cllae 5 numero 3333',
      claimerEmail: 'manglar@gmail.com'
    }
  });

  return (
    <>
      <Col
        className="d-flex flex-column justify-content-center align-items-center mb-3 mt-3"
        xs={12}
      >
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px', marginLeft: '20px' }}>
            NOMBRE *
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe aqui tu nombre"
            {...register('claimerName')}
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.claimerName?.message}
        </span>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px', marginLeft: '5px' }}>
            NÚMERO DE IDENTIFICACIÓN *
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe aqui tu documento de identifiación"
            {...register('claimerIdNumber')}
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.claimerIdNumber?.message}
        </span>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px', marginLeft: '5px' }}>
            CIUDAD DE DOMICILIO *
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe aqui tu la ciudad donde te domicilias"
            {...register('claimerCity')}
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.claimerCity?.message}
        </span>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px', marginLeft: '5px' }}>
            DIRECCIÓN EXACTA *
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe aqui tu dirección exacta"
            {...register('claimerAddress')}
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.claimerAddress?.message}
        </span>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px', marginLeft: '5px' }}>
            CORREO ELECTRÓNICO *
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Escribe aqui tu dirección exacta"
            {...register('claimerEmail')}
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.claimerEmail?.message}
        </span>
      </Col>
      <Col xs={6} className="d-flex justify-content-center align-items-start">
        {i === 0 ? null : (
          <button className="previousStepbutton" onClick={goPreviousStep}>
            ATRÁS
          </button>
        )}
      </Col>
      <Col xs={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px'
          }}
        >
          <button className={`${step.nextStepButton}`} onClick={handleSubmit(uploadState)}>
            SIGUIENTE
          </button>
          <div className="stepsContainer">
            {steps.map((step, i) => (
              <div id={i === currentStep - 1 ? 'circleSelected' : 'circle'} key={i}></div>
            ))}
          </div>
        </div>
      </Col>
    </>
  );
};
