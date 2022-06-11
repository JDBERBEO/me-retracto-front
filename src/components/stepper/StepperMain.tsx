import React, { useEffect, useRef, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';

export const StepperMain = ({steps}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepperSelector = useRef<HTMLDivElement>(null);
  // Every time our currentStep is updated, we are going to trigger this
  // useEffect(() => {
  //   moveStepper();
  // }, [currentStep]);
 
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
      {/* This will display our current step */}
      <div className="stepper-selector" ref={stepperSelector}>
        {steps.map((step, i) => (
          <div key={i}>
            { i + 1 === currentStep ? (
            <>  
            <Row style={{backgroundColor:'white', height: '20vh'}} className="align-items-center justify-content-center" sm={6}>
              <Col sm={7} md={6} lg={6}>
                <div>
                  <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:`${step.backgroundColor}`, fontSize: '24px'}}>RECLAMACIÓN PRESTADOR DE SERVICIOS TURÍSTICOS</h2>
                  </div>
              </Col>
            </Row>
            <Row className="justify-content-center" sm={6}>
              <Col sm={10} md={10} lg={10}>
                <div className="h-75 d-inline-block">
                  <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 800, fontSize: '12px', marginBottom:'0px'}}>Estimado usuario.</p>
                  <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 500, fontSize: '10px', letterSpacing: '1px',}}>Tenga en cuenta que el presente formulario está diseñado para allegar reclamaciones por incumplimiento de prestadores turísticos ante la Superintendencia de Industria y Comercio - SIC</p>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center" style={{backgroundColor:`${step.backgroundColor}`, height:'45vh'}}>
              <Col sm={9} md={10} lg={10} >
                <Form>
                <section>
                  <label className='form-label'>CORREO*</label>
                  <input className="form-input" type="email" placeholder="Escribe aqui tu correo electrónico"/>
                </section>
                </Form>
              </Col>
              <Row className='justify-content-end'>
                <Col sm={3}>
                <div>
                  { i === 0 ? null : (
                  <button
                    className="stepButton"
                    onClick={goPreviousStep}
                  >
                    GO PREVIOUS
                  </button>
                  )}
                  { i + 1 === steps.length ? null : (
                  <button className="nextStepButton"  onClick={goNextStep}>
                    SIGUIENTE
                  </button>
                  )}
                  <div >
                  {steps.map((step, i) =>(
                  <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
                  ))}
                  </div>
                </div>
                </Col>
              </Row>
            </Row>
            </>
              ): null}
          </div>
        ))}
      </div>
    </div>
  )
}
