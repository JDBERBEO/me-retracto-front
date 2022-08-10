import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { postClaimAsync } from '../../store/features/claims/claimsSlice';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import {object,string, bool, boolean} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";



export const StepperMain = ({steps}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepperSelector = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

//   const [newClaim, setNewClaim] = useState({
//     id: "",
//     documentMonth: "",
//     documentYear: "",
//     agreementDate: "",
//     claimerName: "",
//     claimerIDNumber: "",
//     claimerIDCity: "",
//     claimerCity: "",
//     claimerAddress: "",
//     claimerEmail: "",
//     defendantName: "",
//     facts:"",
//     proofs: ""
// });

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
   console.log('newClaim: ', values)

   dispatch(postClaimAsync(navigate, {claimFields: values}, sendEmail, e));
};
 
  const goNextStep = () => {
    // console.log(await handleSubmit())
    const nextStep = currentStep + 1;
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep);
    }
  };
 
  const goPreviousStep = () => {
    // handleSubmit()

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
                // register={register}
                // errors = {errors}
                // handleSubmit = {handleSubmit}
                // {...register }
                // setNewEmail={(e) => setNewClaim({ ...newClaim, claimerEmail: e.target.value })} 
                // setNewDefendantName={(e) => setNewClaim({ ...newClaim, defendantName: e.target.value })} 
                // setNewID={(e) => {
                //   console.log('id: ', newClaim.id)
                //   return setNewClaim({ ...newClaim, id: e.target.value })}} 
                // setNewName={(e) => setNewClaim({ ...newClaim, claimerName: e.target.value })}
                // setNewClaimerCity={(e) => setNewClaim({ ...newClaim, claimerCity: e.target.value })}
                // setNewClaimerAddress={(e) => setNewClaim({ ...newClaim, claimerAddress: e.target.value })}
                // setNewDocumentMonth={(e) => setNewClaim({ ...newClaim, documentMonth: e.target.value })}
                // setNewDocumentYear={(e) => setNewClaim({ ...newClaim, documentYear: e.target.value })}
                // setNewFacts={(e) => setNewClaim({ ...newClaim, facts: e.target.value })}
                // setNewProofs={(e) => setNewClaim({ ...newClaim, proofs: e.target.value })}
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
