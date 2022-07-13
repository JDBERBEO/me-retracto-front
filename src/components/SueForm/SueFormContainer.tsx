import React, { useEffect } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap/'
import { StepperMain } from '../stepper/StepperMain.tsx'
import { useSelector, useDispatch } from 'react-redux';
import { getTemplatesAsync, deleteTemplateAsync } from '../../store/features/templates/templatesSlice';

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

const StepOne = ({
  setNewEmail
}) => {
  return (
    <Form>
    <section style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:'35vh', width: '100%'}}>
      <label className='form-label'>CORREO*</label>
      <input className="form-input" type="email" placeholder="Escribe aqui tu correo electrónico" onChange={setNewEmail}/>
    </section>
    </Form>
    )
};
  
const StepTwo = () => {
  return (
    <Form>
    <section style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <p className="helperText">
        Dando cumplimiento a lo dispuesto en la Ley 1581 de 2012, "Por el cual se dictan disposiciones generales
        parala protección de datos personales" y de conformidad con lo señalado en el Decreto 1377 de 2013, con
        la aceptación del presente formulario autorizo de manera expresa y previa sin lugar a pagos ni retribuciones
        a AVIA LEGAL SAS, para que efectúe el tratamiento de mis datos personales de la manera y para las 
        finalidades señaladas a continuación:<br /><br />
        1. AVIA LEGAL S.A.S., actuará como responsable del Tratamiento de datos personales de los cuales soy titular y 
        que, conjunta o separadamente podrá recolectar, tomando como datos personales cualquier información personal 
        que suministre por cualquier este medio.<br /><br />
        
        2. Mis derechos como titular de los datos son los previstos en la Constitución y la ley, especialmente el derecho
        a conocer, actualizar, rectificar y suprimir mi información personal, así como el derecho a revocar el 
        consentimiento otorgado para el tratamiento de datos personales.<br /><br />
        
        3. Los derechos pueden ser ejercidos a través de los canales dispuestos por AVIA LEGAL S.A.S., y observando
        la Política de Tratamiento de Datos Personales de AVIA LEGAL S.A.S.<br /><br />
        
        4. AVIA LEGAL S.A.S informa que el tratamiento de sus datos personales se efectuará de acuerdo a la política 
        de la entidad en dicho campo, la cual puede ser consultada mediante la página web(www.avialegal.com.co), 
        podrá radicar cualquier tipo de requerimiento relacionado con el tratamiento de sus datos personales. Para 
        la atención de consultas y reclamos, puede dirigirse a nuestra oficina(Cra. 11 No.82-01 Piso 4 / calle
        20 # 4 -55, piso 2) o comunicarse al teléfono 1 381 71 11. <br /><br />
        
        5. AVIA LEGAL S.A.S., garantizará la confidencialidad, libertad, seguridad, veracidad, transparencia,
        acceso y circulación restringida de mis datos y se reservará el derecho de modificar su Política de 
        Tratamiento de Datos Personales en cualquier momento. Cualquier cambio será informado.<br /><br />
        
        6. Teniendo en cuenta lo anterior, autorizo de manera voluntaria, previa, explícita, informada a 
        AVIA LEGAL S.A.S., para tratar mis datos personales de acuerdo con su Política de Tratamiento de Datos 
        Personales para los fines relacionados con su objeto.
      </p>
      <Col sm={4}>
        <h4 style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'center', fontWeight: 700, fontSize: '11px', letterSpacing: '1px', color: 'white', marginTop: '7vh', marginBottom: '8vh',}}>AUTORIZA EL TRATAMIENTO DE SUS DATOS PERSONALES *</h4>
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
          <button className="outlinedButton"  onClick={() => console.log('hola')}>
                    No Autorizo
          </button>
          <button className="nextStepButton__green"  onClick={() => console.log('hola')}>
                    AUTORIZO
          </button>
        </div>
      </Col>
    </section>
    </Form>
    )
  };
    
  const StepThree = ({
    setNewDefendantName
  }) => {
    return (
      <Form style={{display:'flex', flexDirection: 'column', alignItems: 'left', marginBottom:'15vh'}}>
        <div>
        <p className="helperText" style={{marginTop: '3vh'}}>
        Para poder iniciar el proceso tenga en cuenta que si usted no ha realizado la reclamación directa 
        con el prestador de servicios turísticos no podemos proceder con su reclamación, de acuerdo al
        articulo 58 numeral quinto de la ley 1480 de 2011. 
        </p>
        <section style={{marginTop: '8vh'}}>
          <label className='form-label'>NOMBRE DEL PRESTADOR O PRESTADORES DE SERVICIOS TURÍSTICOS **</label>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui el nombre del prestador del servicio" 
          style={{marginTop: '3vh'}}
          onChange={setNewDefendantName}
          />
        </section>
        <section style={{marginTop: '3vh', marginBottom: '1vh'}}>
          <label className='form-label'>FECHA DE LA RECLAMACIÓN DIRECTA *</label>
          <input 
          className="form-input" 
          type="text" 
          placeholder="Escribe aqui la fecha de la reclamación directa" 
          style={{marginTop: '3vh'}}
          // onChange={setNewDefendantName}
          />
        </section>
        </div>
      </Form>
      )
    };

    const StepFour = ({
      setNewName,
      setNewClaimerIDNumber,
      setNewClaimerCity,
      setNewClaimerAddress
    }) => {
      return (
        <Form  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'between', marginTop: '4vh', marginBottom:'15vh'}} >
        <section style={{marginTop: '5vh'}}>
          <label className='form-label'>NOMBRE *</label>
          <input className="form-input" type="text" placeholder="Escribe aqui tu nombre" onChange={setNewName}/>
        </section>
        <section style={{marginTop: '5vh'}}>
          <label className='form-label'>NÚMERO DE IDENTIFICACIÓN *</label>
          <input className="form-input" type="text" placeholder="Escribe aqui tu documento de identifiación" onChange={setNewClaimerIDNumber}/>
        </section>
        <section style={{marginTop: '5vh'}}>
          <label className='form-label'>CIUDAD DE DOMICILIO *</label>
          <input className="form-input" type="text" placeholder="Escribe aqui tu la ciudad donde te domicilias" onChange={setNewClaimerCity}/>
        </section>
        <section style={{marginTop: '5vh'}}>
          <label className='form-label'>DIRECCIÓN EXACTA *</label>
          <input className="form-input" type="text" placeholder="Escribe aqui tu dirección exacta" onChange={setNewClaimerAddress}/>
        </section>
        </Form>
        )
      };

    const StepFive = ({
      setNewID,
      setNewDocumentMonth,
      setNewDocumentYear,
      setNewFacts
    }) => {
      const dispatch = useDispatch()
      const suitsTemplates = useSelector((state) => (state.templates.templates));

      useEffect(() => {
        dispatch(getTemplatesAsync())
      }, [])
      
      
      return (
        <Form  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'between', marginTop: '4vh', marginBottom:'15vh'}} >
          <section style={{marginTop: '5vh'}}>
            <label className='form-label'>SELECCIONE EL TIPO DE RECLAMO*</label>
            <select onChange={setNewID} className="form-input">
              <option>selecciona una opción...</option>
              {suitsTemplates.map((template) => {
                return <option value={template._id} key={template._id}>{template.name}</option>
              })}
            </select> 
          </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label'>MES PARA EL DOCUMENTO</label>
            <input className="form-input" type="email" placeholder="Escribe aqui el mes que aparecerá en el documento" onChange={setNewDocumentMonth}/>
          </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label'>AÑO PARA EL DOCUMENTO</label>
            <input className="form-input" type="email" placeholder="Escribe aqui el año que aparecerá en el documento" onChange={setNewDocumentYear}/>
          </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label'>HECHOS*</label>
            <p className="helperText">
              Realice una descripción de lo sucedido enumerando cada una de las situaciones y colocando en el inicio de cada 
              hecho la fecha y lugar, como se muestra en el ejemplo
            </p>
            <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '5vh'}}>
            <textarea className='form-textArea' 
            placeholder='
            1. 1/2/2011 descripción del hecho
            2. 3/4/2011 descripción del hecho
            3. 5/5/2011 descripción del hecho
            4. 6/6/2011 descripción del hecho'
            onChange={setNewFacts}
            >
            </textarea>
            </div>
          </section>
        </Form>
        )
      };

    const StepSix = ({
      setNewProofs
    }) => {
      return (
        <Form>
          <section>
            <label className='form-label'>ADJUNTE LOS DOCUMENTOS QUE SOPORTAN ESTE RECLAMO. *</label>
            <label className='helperText'>Por favor guarde cada archivo con su nombre. Tenga en cuenta que se permiten máximo 10 archivos.</label>
            <input className="form-input" type="email" placeholder="Escribe aqui el año que aparecerá en el documento" onChange={setNewProofs} />
          </section>
        </Form>
        )
      };
