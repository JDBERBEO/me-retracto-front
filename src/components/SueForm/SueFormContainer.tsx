import React from 'react';
import { StepperMain } from '../stepper/StepperMain.tsx';
import { StepOne } from './steps/StepOne.tsx';
import { StepTwo } from './steps/StepTwo.tsx';
import { StepThree } from './steps/StepThree.tsx';
import { StepFour } from './steps/StepFour.tsx';
import { StepFive } from './steps/StepFive.tsx';
import { StepSix } from './steps/StepSix.tsx';
import { StepSeven } from './steps/StepSeven.tsx';

export const SueFormContainer = () => {
  return (
    <div style={{ height: 'cover', maxWidth: '100%' }}>
      <StepperMain
        steps={[
          {
            stepNumber: '1',
            title: 'SELECCIONA EL TIPO DE DEMANDA',
            backgroundColor: '#EB646F',
            nextStepButton: 'nextStepButton__red',
            element: (stepProps) => <StepOne {...stepProps} />
          },
          {
            stepNumber: '2',
            title: 'TRATAMIENTO DE DATOS',
            backgroundColor: '#00AC9E',
            nextStepButton: 'nextStepButton__green',
            element: (stepProps) => <StepTwo {...stepProps} />
          },
          {
            stepNumber: '3',
            title: 'INFORMACIÓN DEL RECLAMO',
            backgroundColor: '#4E4B99',
            nextStepButton: 'nextStepButton__purple',
            element: (stepProps) => <StepThree {...stepProps} />
          },
          {
            stepNumber: '4',
            backgroundColor: '#FAB816',
            title: 'DATOS PERSONALES',
            nextStepButton: 'nextStepButton__yellow',
            element: (stepProps) => <StepFour {...stepProps} />
          },
          {
            stepNumber: '5',
            backgroundColor: '#EB646F',
            title: 'INFORMACIÓN DE LA SOLICITUD',
            nextStepButton: 'nextStepButton__red',
            element: (stepProps) => <StepFive {...stepProps} />
          },
          {
            stepNumber: '6',
            backgroundColor: '#4E4B99',
            title: 'PRUEBAS DOCUMENTALES',
            nextStepButton: 'nextStepButton__purple',
            element: (stepProps) => <StepSix {...stepProps} />
          },
          {
            stepNumber: '7',
            backgroundColor: '#00AC9E',
            title: '¡HEMOS CREADO TU DEMANDA EXITÓSAMENTE!',
            nextStepButton: 'nextStepButton__green',
            element: (stepProps) => <StepSeven {...stepProps} />
          }
        ]}
      />
    </div>
  );
};
