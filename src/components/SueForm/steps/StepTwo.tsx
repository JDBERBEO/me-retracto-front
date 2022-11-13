import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { object, string, bool, boolean } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fillClaimAsync, postClaimAsync } from '../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const StepTwo = ({
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
    acceptTerms: boolean().oneOf(
      [true],
      'Para continuar debes aceptar la política de tratamiento de datos*'
    )
  });

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data));
    goNextStep();
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema), defaultValues: { acceptTerms: true } });

  return (
    // <form>
    <>
      <Col xs={12}>
        <section style={{ padding: '20px' }}>
          <p className="helperText">
            Dando cumplimiento a lo dispuesto en la Ley 1581 de 2012, "Por el cual se dictan
            disposiciones generales parala protección de datos personales" y de conformidad con lo
            señalado en el Decreto 1377 de 2013, con la aceptación del presente formulario autorizo
            de manera expresa y previa sin lugar a pagos ni retribuciones a AVIA LEGAL SAS, para que
            efectúe el tratamiento de mis datos personales de la manera y para las finalidades
            señaladas a continuación:
            <br />
            <br />
            1. AVIA LEGAL S.A.S., actuará como responsable del Tratamiento de datos personales de
            los cuales soy titular y que, conjunta o separadamente podrá recolectar, tomando como
            datos personales cualquier información personal que suministre por cualquier este medio.
            <br />
            <br />
            2. Mis derechos como titular de los datos son los previstos en la Constitución y la ley,
            especialmente el derecho a conocer, actualizar, rectificar y suprimir mi información
            personal, así como el derecho a revocar el consentimiento otorgado para el tratamiento
            de datos personales.
            <br />
            <br />
            3. Los derechos pueden ser ejercidos a través de los canales dispuestos por AVIA LEGAL
            S.A.S., y observando la Política de Tratamiento de Datos Personales de AVIA LEGAL S.A.S.
            <br />
            <br />
            4. AVIA LEGAL S.A.S informa que el tratamiento de sus datos personales se efectuará de
            acuerdo a la política de la entidad en dicho campo, la cual puede ser consultada
            mediante la página web(www.avialegal.com.co), podrá radicar cualquier tipo de
            requerimiento relacionado con el tratamiento de sus datos personales. Para la atención
            de consultas y reclamos, puede dirigirse a nuestra oficina(Cra. 11 No.82-01 Piso 4 /
            calle 20 # 4 -55, piso 2) o comunicarse al teléfono 1 381 71 11. <br />
            <br />
            5. AVIA LEGAL S.A.S., garantizará la confidencialidad, libertad, seguridad, veracidad,
            transparencia, acceso y circulación restringida de mis datos y se reservará el derecho
            de modificar su Política de Tratamiento de Datos Personales en cualquier momento.
            Cualquier cambio será informado.
            <br />
            <br />
            6. Teniendo en cuenta lo anterior, autorizo de manera voluntaria, previa, explícita,
            informada a AVIA LEGAL S.A.S., para tratar mis datos personales de acuerdo con su
            Política de Tratamiento de Datos Personales para los fines relacionados con su objeto.
          </p>
        </section>
      </Col>
      <Col xs={12}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            marginTop: '20px',
            marginBottom: '20px',
            height: '81px'
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <input
              {...register('acceptTerms')}
              type="checkbox"
              style={{
                fontFamily: 'Raleway, sans-serif',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '1px',
                color: 'white'
              }}
            />
            <label
              style={{
                fontFamily: 'Raleway, sans-serif',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '1px',
                color: 'white'
              }}>
              AUTORIZO EL TRATAMIENTO DE DATOS PERSONALES *
            </label>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'Raleway, sans-serif',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '1px',
                color: 'white',
                marginTop: '7vh',
                marginBottom: '8vh'
              }}>
              {errors?.acceptTerms?.message}
            </span>
          </div>
        </section>
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
    //  </form>
  );
};
