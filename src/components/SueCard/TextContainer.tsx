import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { PreventModal } from '../PreventModal.tsx';
import types from '../../constants/typesHome';
import { updateStepper } from '../../store/features/claims/claimsSlice.js';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const TextContainer = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonColor,
  id,
  index,
  imgsUrl
}) => {
  const navigate = useNavigate();
  const redirectStepper = () => {
    useDispatch(updateStepper(7));
    navigate('/form', { replace: true });
  };

  return (
    <>
      {index === 1 ? (
        <div className="stepsDescriptionCard mt-5 ">
          <h1>{title}</h1>
          <h6 className="stepsDescriptionCard__main-content mt-5 mx-5">{subtitle}</h6>
          <Row className="pt-5 mt-5 mx-5">
            <Col xs={12} md={3}>
              <img src={imgsUrl.yellowArrow} style={{ maxWidth: '50px' }} alt="yellow_arrow" />
              <h6>{types.instructionsCard.stepOne}</h6>
            </Col>
            <Col xs={12} md={3}>
              <img src={imgsUrl.redArrow} style={{ maxWidth: '50px' }} alt="red_arrow" />
              <h6>{types.instructionsCard.stepTwo}</h6>
            </Col>
            <Col xs={12} md={3}>
              <div>
                <img src={imgsUrl.purpleArrow} style={{ maxWidth: '50px' }} alt="purple_arrow" />
                <h6>{types.instructionsCard.stepThree}</h6>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div>
                <img src={imgsUrl.greenArrow} style={{ maxWidth: '50px' }} alt="green_arrow" />
                <h6>{types.instructionsCard.stepFour}</h6>
              </div>
            </Col>
          </Row>
        </div>
      ) : null}
      {index !== 1 ? (
        <div className={index === 0 ? 'sueCard' : 'docCard'}>
          <h1 id={`${id}`} className={index === 0 ? 'sueCard__title' : 'docCard__title'}>
            {title}
          </h1>
          {index === 0 ? <h5 className="sueCard__subtitle mt-5">{subtitle}</h5> : null}
          {index === 0 ? null : <p className="docCard__description">{description}</p>}
          buttonText: {buttonText}
          {buttonText === 'CONTINUAR' ? (
            <button className={buttonColor} onClick={() => redirectStepper()}>
              CONTINUAR
            </button>
          ) : (
            <PreventModal buttonText={buttonText} buttonColor={buttonColor} index={index} />
          )}
        </div>
      ) : null}
    </>
  );
};
