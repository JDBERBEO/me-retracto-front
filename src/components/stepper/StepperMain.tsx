import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { postClaimAsync } from '../../store/features/claims/claimsSlice';
import emailjs from 'emailjs-com';



export const StepperMain = ({steps}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepperSelector = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

const sendEmail = (e: { preventDefault: () => void; } | undefined) => {
  e.preventDefault();

  emailjs.send('service_cc2049t', 'template_n112mw8', {} , 'P04vzZkGfMSd-ijUi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

const handleOnClick = (e: { preventDefault: () => void }, values) => {
  // e.preventDefault()
   dispatch(postClaimAsync(navigate, {claimFields: values}, sendEmail, e));
};
 
  const goNextStep = () => {
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
      <div className="stepper-selector" ref={stepperSelector}>
        {steps.map((step, i) => (
          <div key={i}>
            { i + 1 === currentStep ? (
            <>  
            <div>
              <Row style={{backgroundColor:'white', height: '20vh'}} className="align-items-center justify-content-center" >
                <Col sm={7} md={6} lg={6}>
                  <div>
                    <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:`${step.backgroundColor}`, fontSize: '20px'}}>RECLAMACIÓN PRESTADOR DE SERVICIOS TURÍSTICOS</h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
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
            <div className="align-items-center justify-content-center" style={{height:'fix-content', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Col sm={9} md={10} lg={10} >
                <step.element
                  i={i}
                  goPreviousStep={goPreviousStep}
                  steps={steps}
                  step={step}
                  handleOnClick={handleOnClick}
                  goNextStep={goNextStep}
                  currentStep={currentStep}
                  sendEmail={sendEmail}
                />
              </Col>
            </div>

            </div>
            </>
              ): null}
          </div>
        ))}
      </div>
    </div>
  )
}
