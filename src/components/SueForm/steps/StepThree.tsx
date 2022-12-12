import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const dispatch = useDispatch();

  const schema = object({
    defendantName: string().required('Este campo es requerido*'),
    agreementDate: string().required('Este campo es requerido*')
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
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { defendantName: 'ErnestoPerez', agreementDate: '20 de septiembre de 03' }
  });

  return (
    <>
      <Col className="d-flex justify-content-center align-items-center" xs={12}>
        <p className="helperText" style={{ marginTop: '50px' }}>
          Para poder iniciar el proceso tenga en cuenta que si usted no ha realizado la reclamación
          directa con el prestador de servicios turísticos no podemos proceder con su reclamación,
          de acuerdo al articulo 58 numeral quinto de la ley 1480 de 2011.
        </p>
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center mb-5 mt-5"
        xs={12}>
        {/* <section style={{marginTop: '50px'}}> */}
        <label className="form-label">
          NOMBRE DEL PRESTADOR O PRESTADORES DE SERVICIOS TURÍSTICOS*
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Escribe aqui el nombre del prestador del servicio"
          style={{ marginTop: '3vh' }}
          {...register('defendantName')}
        />
        <span className="form-label" style={{ marginLeft: '10px' }}>
          {errors?.defendantName?.message}
        </span>
        {/* </section>  */}
        {/* <section style={{marginTop: '50px', marginBottom: '60px',}}> */}
        <label className="form-label" style={{ marginTop: '50px' }}>
          FECHA EN QUE SE ADQUIRIÓ EL SERVICIO*
        </label>
        <input
          className="form-input"
          type="text"
          placeholder="Escribe aqui la fecha de la reclamación directa"
          style={{ marginTop: '3vh' }}
          {...register('agreementDate')}
        />
        <span className="form-label" style={{ marginLeft: '10px' }}>
          {errors?.agreementDate?.message}
        </span>
        {/* </section> */}
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
          }}>
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
