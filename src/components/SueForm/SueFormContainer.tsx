import React, { useEffect } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap/'
import { StepperMain } from '../stepper/StepperMain.tsx'
import { useSelector, useDispatch } from 'react-redux';
import { getTemplatesAsync, deleteTemplateAsync } from '../../store/features/templates/templatesSlice';
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

    // const StepFive = ({
    //   setNewID,
    //   setNewDocumentMonth,
    //   setNewDocumentYear,
    //   setNewFacts
    // }) => {
    //   const dispatch = useDispatch()
    //   const suitsTemplates = useSelector((state) => (state.templates.templates));

    //   useEffect(() => {
    //     dispatch(getTemplatesAsync())
    //   }, [])
      
      
    //   return (
    //     <Form  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'between', marginTop: '4vh', marginBottom:'15vh'}} >
    //       <section style={{marginTop: '5vh'}}>
    //         <label className='form-label'>SELECCIONE EL TIPO DE RECLAMO*</label>
    //         <select onChange={setNewID} className="form-input">
    //           <option>selecciona una opción...</option>
    //           {suitsTemplates.map((template) => {
    //             return <option value={template._id} key={template._id}>{template.name}</option>
    //           })}
    //         </select> 
    //       </section>
    //       <section style={{marginTop: '5vh'}}>
    //         <label className='form-label'>MES PARA EL DOCUMENTO</label>
    //         <input className="form-input" type="email" placeholder="Escribe aqui el mes que aparecerá en el documento" onChange={setNewDocumentMonth}/>
    //       </section>
    //       <section style={{marginTop: '5vh'}}>
    //         <label className='form-label'>AÑO PARA EL DOCUMENTO</label>
    //         <input className="form-input" type="email" placeholder="Escribe aqui el año que aparecerá en el documento" onChange={setNewDocumentYear}/>
    //       </section>
    //       <section style={{marginTop: '5vh'}}>
    //         <label className='form-label'>HECHOS*</label>
    //         <p className="helperText">
    //           Realice una descripción de lo sucedido enumerando cada una de las situaciones y colocando en el inicio de cada 
    //           hecho la fecha y lugar, como se muestra en el ejemplo
    //         </p>
    //         <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '5vh'}}>
    //         <textarea className='form-textArea' 
    //         placeholder='
    //         1. 1/2/2011 descripción del hecho
    //         2. 3/4/2011 descripción del hecho
    //         3. 5/5/2011 descripción del hecho
    //         4. 6/6/2011 descripción del hecho'
    //         onChange={setNewFacts}
    //         >
    //         </textarea>
    //         </div>
    //       </section>
    //     </Form>
    //     )
    //   };

    // const StepSix = ({
    //   setNewProofs
    // }) => {
    //   return (
    //     <Form>
    //       <section>
    //         <label className='form-label'>ADJUNTE LOS DOCUMENTOS QUE SOPORTAN ESTE RECLAMO. *</label>
    //         <label className='helperText'>Por favor guarde cada archivo con su nombre. Tenga en cuenta que se permiten máximo 10 archivos.</label>
    //         <input className="form-input" type="email" placeholder="Escribe aqui el año que aparecerá en el documento" onChange={setNewProofs} />
    //       </section>
    //     </Form>
    //     )
    //   };
