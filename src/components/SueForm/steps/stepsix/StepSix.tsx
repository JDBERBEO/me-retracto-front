import React, { useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  fillClaimAsync,
  updateClaimWithFiles
} from '../../../../store/features/claims/claimsSlice';
import { useDispatch, useSelector } from 'react-redux';
import typesSteps from '../../../../constants/typesSteps';
import AddInputs from './AddInputs.tsx';
import { Loader } from '../../../common/spinner/Loader.tsx';
import Tooltip from '@mui/material/Tooltip';
import typesHome from '../../../../constants/typesHome';

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
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([{ name: '', size: '0 bytes' }]);
  const { filledClaim, error, loading } = useSelector((state: any) => state.claims);
  const stateRef = useRef();
  stateRef.current = error;

  const schema = object({
    proofs: string().required('Este campo es requerido*')
  });

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data));
    goNextStep();
  };

  const sendClaim = (data, e) => {
    const completedClaim = {
      ...data,
      ...filledClaim,
      files: inputFields
    };
    // completedClaim.payment = { status: 'not paid' };
    console.log('complete claim: ', completedClaim);
    dispatch(updateClaimWithFiles(completedClaim));
    uploadState(data);
  };

  const totalSize = (filesArray) => {
    return filesArray.reduce((accumulator, object) => {
      return accumulator + object.size;
    }, 0);
  };

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        name: '',
        size: 'O bytes'
      }
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const list = [...inputFields];
    list[index] = evnt.target.files[0];
    setInputFields(list);
  };

  const disableUploadButton = () => {
    console.log('!!steref', !!stateRef.current);
    console.log(
      'disableupload: ',
      !!stateRef.current
      // ||
      //   totalSize(inputFields) > 10000000 ||
      //   totalSize(inputFields) === 0 ||
      //   (inputFields.length === 1 && inputFields[0].size === '0 bytes')
    );
    return (
      !!stateRef.current ||
      totalSize(inputFields) > 10000000 ||
      totalSize(inputFields) === 0 ||
      (inputFields.length === 1 && inputFields[0].size === '0 bytes')
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema), defaultValues: { proofs: 'factura chimba' } });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (loading) {
    return (
      <Row>
        <Col>
          <Row>
            <Col
              xs={12}
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ height: '550px' }}>
              <Loader variant={'danger'} />
              <p className="form-label mt-5">Cargando...</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  return (
    <>
      {/* <Col
        className="d-flex flex-column justify-content-start align-items-start mb-3 mt-3 ms-3"
        xs={12}></Col> */}
      <Col className="d-flex flex-column justify-content-start align-items-center mb-5 mt-5" xs={6}>
        <label className="form-label">{typesSteps.proofs.label}</label>
        <label className="helperText">{typesSteps.proofs.helperText}</label>
        <AddInputs
          inputFields={inputFields}
          addInputField={addInputField}
          removeInputFields={removeInputFields}
          handleChange={handleChange}
          setInputFields={setInputFields}
          totalSize={totalSize}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            marginTop: '15px'
          }}>
          <Tooltip
            placement="right"
            title="Recuerda que debes insertar al menos un archivo y el peso total de tus adjuntos no puede ser mayor a 10MB">
            <span>
              <button
                disabled={disableUploadButton()}
                style={
                  !!stateRef.current ||
                  totalSize(inputFields) > 10000000 ||
                  totalSize(inputFields) === 0 ||
                  (inputFields.length === 1 && inputFields[0].size === '0 bytes')
                    ? { pointerEvents: 'none' }
                    : {}
                }
                className={`${step.nextStepButton}`}
                onClick={handleSubmit(sendClaim)}>
                {typesSteps.common.send}
              </button>
            </span>
          </Tooltip>
          <div className="stepsContainer">
            {steps.map((step, i) => (
              <div id={i === currentStep - 1 ? 'circleSelected' : 'circle'} key={i}></div>
            ))}
          </div>
        </div>
      </Col>
      <Col className="d-flex flex-column justify-content-start align-items-center mb-5 mt-5">
        <label className="form-label">{typesSteps.proofs.downloadables.label}</label>
        <a href="https://res.cloudinary.com/me-retracto/raw/upload/v1670812684/previous%20complaints%20models/reclamacion_previa_e08ljt.docx">
          <span className="helperText">{typesSteps.proofs.downloadables.directedClaim}</span>
        </a>
      </Col>
      {/* <Col xs={6}>
        {i === 0 || i === 6 ? null : (
          <button className="previousStepbutton" onClick={goPreviousStep}>
            {typesSteps.common.previousButton}
          </button>
        )}
      </Col> */}
      {/* <Col xs={6}></Col> */}
    </>
  );
};
