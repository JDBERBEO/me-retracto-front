import React, { useEffect } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap/'
import { StepperMain } from '../stepper/StepperMain.tsx'
import { StepOne } from './steps/StepOne.tsx';
import { StepTwo } from './steps/StepTwo.tsx';
import { StepThree } from './steps/StepThree.tsx';
import { StepFour } from './steps/StepFour.tsx';
import { StepFive } from './steps/StepFive.tsx';
import { StepSix } from './steps/StepSix.tsx';

export const SueFormContainer = () => {

  return (
    <div style={{height: 'cover', maxWidth: '100%'}}>
      <StepperMain steps={[
        {
          stepNumber: "1",
          title: 'ESCRIBE TU CORREO ELECTRÓNICO',
          backgroundColor: '#EB646F',
          nextStepButton: 'nextStepButton__red',
          element: stepProps => <StepOne {...stepProps} />,
        },
        {
          stepNumber: "2",
          title: 'TRATAMIENTO DE DATOS',
          backgroundColor: '#00AC9E',
          nextStepButton: 'nextStepButton__green',
          element: stepProps => <StepTwo {...stepProps} />,
        },
        {
          stepNumber: "3",
          title: 'INFORMACIÓN DEL RECLAMO',
          backgroundColor: '#4E4B99',
          nextStepButton: 'nextStepButton__purple',
          element: stepProps => <StepThree {...stepProps} />,
        },
        {
          stepNumber: "4",
          backgroundColor: '#FAB816',
          title: 'DATOS PERSONALES',
          nextStepButton: 'nextStepButton__yellow',
          element: stepProps => <StepFour {...stepProps} />,
        },
        {
          stepNumber: "5",
          backgroundColor: '#EB646F',
          title: 'INFORMACIÓN DE LA SOLICITUD',
          nextStepButton: 'nextStepButton__red',
          element: stepProps => <StepFive {...stepProps} />,
        },
        {
          stepNumber: "6",
          backgroundColor: '#00AC9E',
          title: 'PRUEBAS DOCUMENTALES',
          nextStepButton: 'nextStepButton__green',
          element: stepProps => <StepSix {...stepProps} />,
        },
      ]} />
    </div>
  )
}
