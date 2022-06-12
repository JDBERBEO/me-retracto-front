import React, { useEffect, useRef, useState } from 'react'
import { Col, Form, Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { postClaimAsync } from '../../store/features/claims/claimsSlice';


export const StepperMain = ({steps}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepperSelector = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  // Every time our currentStep is updated, we are going to trigger this
  // useEffect(() => {
  //   moveStepper();
  // }, [currentStep]);
  const [newClaim, setNewClaim] = useState({
    id: "",
    documentMonth: "",
    documentYear: "",
    agreementDate: "",
    claimerName: "",
    claimerIDNumber: "",
    claimerIDCity: "",
    claimerCity: "",
    claimerAddress: "",
    claimerEmail: "",
    defendantName: "",
    facts:"",
    proofs: ""
});

const handleOnClick = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  console.log('newClaim: ', newClaim)

  dispatch(postClaimAsync(navigate, {claimFields: newClaim}));
};
 
  const goNextStep = (e) => {
    const nextStep = currentStep + 1;
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };
 
  const goPreviousStep = () => {
    const previousStep = currentStep - 1;
    if (previousStep >= 1) {
      setCurrentStep(previousStep);
    }
  };

  return (
    <div className="stepper stepper-wrapper">
      {/* This will display our current step */}
      <div className="stepper-selector" ref={stepperSelector}>
        {steps.map((step, i) => (
          <div key={i}>
            { i + 1 === currentStep ? (
            <>  
            <div>
              <Row style={{backgroundColor:'white', height: '20vh'}} className="align-items-center justify-content-center" sm={6}>
                <Col sm={7} md={6} lg={6}>
                  <div>
                    <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:`${step.backgroundColor}`, fontSize: '20px'}}>RECLAMACIÓN PRESTADOR DE SERVICIOS TURÍSTICOS</h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center" sm={6}>
                <Col sm={10} md={10} lg={10}>
                  <div className="h-75 d-inline-block">
                    <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 800, fontSize: '12px', marginBottom:'0px'}}>Estimado usuario.</p>
                    <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 600, fontSize: '11px', letterSpacing: '1px',}}>Tenga en cuenta que el presente formulario está diseñado para allegar reclamaciones por incumplimiento de prestadores turísticos ante la Superintendencia de Industria y Comercio - SIC</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div style={{backgroundColor:`${step.backgroundColor}`, height:'max-content', display:'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <div className='formTitle'>
                <div className="stepNumberContainer">
                  <div className='stepCircle'>
                    <p className='stepCircle__number'>{step.stepNumber}</p>
                  </div>
                </div>
                <div>
                  <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 700, color:'white', fontSize: '20px', marginBottom: '0px', marginLeft: '30px'}}>
                    {step.title}
                  </h2>
                </div>
              </div>
            <Row className="align-items-center justify-content-center">
              <Col sm={9} md={10} lg={10} >
                <step.element 
                setNewEmail={(e) => setNewClaim({ ...newClaim, claimerEmail: e.target.value })} 
                setNewID={(e) => setNewClaim({ ...newClaim, id: e.target.value })} 
                setNewName={(e) => setNewClaim({ ...newClaim, claimerName: e.target.value })}
                />
              </Col>
            </Row>
              <Row className='align-items-center justify-content-between'>
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
                  { i + 1 === steps.length ? (
                  <button className="nextStepButton"  onClick={handleOnClick}>
                    ENVIAR
                  </button>
                  ) : (
                  <button className="nextStepButton"  onClick={goNextStep}>
                    SIGUIENTE
                  </button>
                  )}
                  <div className='stepsContainer' >
                  {steps.map((step, i) =>(
                  <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
                  ))}
                  </div>
                </Col>

            </Row>
            </div>
            </>
              ): null}
          </div>
        ))}
      </div>
    </div>
  )
}
