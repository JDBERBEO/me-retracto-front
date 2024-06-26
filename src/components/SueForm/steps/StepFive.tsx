/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap/';
import { useDispatch, useSelector } from 'react-redux';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useForm } from 'react-hook-form';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';

export const StepFive = ({
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep
}) => {
  const dispatch = useDispatch();
  const { filledClaim } = useSelector((state: any) => state.claims);
  const MIN_CASE_PRICE = 50000;

  const schema = object({
    documentMonth: string().required('Este campo es requerido*'),
    documentYear: string().required('Este campo es requerido*'),
    facts: string().required('Este campo es requerido*'),
    casePrice: number().required('Este campo es requerido')
  });
  const uploadState = (data) => {
    const paymentRef = Math.random().toString(16).substr(2, 9);

    const calculatedCasePrice = data.casePrice * 0.1;

    // Ensure calculated casePrice is at least MIN_CASE_PRICE
    if (calculatedCasePrice < MIN_CASE_PRICE) {
      data.claimPrice = MIN_CASE_PRICE;
    } else {
      data.claimPrice = calculatedCasePrice;
    }

    data.payment = { status: 'not paid' };
    data.paymentRef = paymentRef;
    dispatch(fillClaimAsync(data));
    const completedClaim = {
      ...filledClaim,
      ...data,
      payment: { status: 'not paid' },
      paymentRef
    };
    console.log('completedClain_: ', completedClaim);
    dispatch(postClaimAsync(completedClaim)).then(() => {
      goNextStep();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      documentMonth: 'septiembre',
      documentYear: '2022',
      facts:
        '1 Pagué unos tiquetes septiembre por un valor de $2.000.000, no pude viajar por enfermedad y no me devolvieron el dinero',
      casePrice: '20000'
    }
  });

  useEffect(() => {
    dispatch(getTemplatesAsync());
  }, []);

  return (
    <>
      <Col
        className="d-flex flex-column justify-content-center align-items-center mb-3 mt-3"
        xs={12}>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px' }}>
            MES PARA EL DOCUMENTO
          </label>
          <input
            {...register('documentMonth')}
            className="form-input"
            type="text"
            placeholder="Escribe aqui el mes que aparecerá en el documento"
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.documentMonth?.message}
        </span>
        <div style={{ marginTop: '40px' }}>
          <label className="form-label" style={{ width: '175px' }}>
            AÑO PARA EL DOCUMENTO
          </label>
          <input
            {...register('documentYear')}
            className="form-input"
            type="text"
            placeholder="Escribe aqui el año que aparecerá en el documento"
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.documentYear?.message}
        </span>
        <p className="helperText" style={{ maxWidth: '550px' }}>
          *El precio de las pretensiones se refiere al valor monetario que le estás reclamando a tu
          proveedor de servicios turísticos. El precio que te cobraremos se calcula con este valor
          de la siguiente manera: <br />
          <br /> Tomaremos el 10% del valor de las pretensiones, en caso en que este sea menor a
          $50.000 COP, el precio final corresponderá a esta última cifra.
        </p>
        <div style={{ marginTop: '10px' }}>
          <label className="form-label" style={{ width: '175px' }}>
            PRECIO DE LAS PRETENSIONES
          </label>
          <input
            {...register('casePrice')}
            className="form-input"
            type="number"
            placeholder="Escribe aqui el precio de tus pretensiones"
          />
        </div>
        <span className="form-label" style={{ marginLeft: '90px', marginTop: '10px' }}>
          {errors?.casePrice?.message}
        </span>
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center mb-3 mt-3"
        xs={12}>
        <div style={{ marginTop: '40px', marginBottom: '80px' }}>
          <div>
            <label className="form-label" style={{ width: '175px' }}>
              HECHOS*
            </label>
            <p className="helperText">
              Realice una descripción de lo sucedido enumerando cada una de las situaciones y
              colocando en el inicio de cada hecho la fecha y lugar, como se muestra en el ejemplo
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20PX'
            }}>
            <span className="form-label">{errors?.facts?.message}</span>
            <textarea
              className="form-textArea"
              placeholder="
          1. 1/2/2011 descripción del hecho
          2. 3/4/2011 descripción del hecho
          3. 5/5/2011 descripción del hecho
          4. 6/6/2011 descripción del hecho"
              {...register('facts')}></textarea>
          </div>
        </div>
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
