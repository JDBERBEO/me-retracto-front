import React, { useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap/'
import { useSelector, useDispatch } from 'react-redux';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';

export const StepFive = ({
  // setNewID,
  // setNewDocumentMonth,
  // setNewDocumentYear,
  // setNewFacts
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep
}) => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.templates.templates));

  const schema = object({
    id: string().required('Este campo es requerido*'),
    documentMonth: string().required('Este campo es requerido*'),
    documentYear: string().required('Este campo es requerido*'),
    facts: string().required('Este campo es requerido*'),
  })

  const uploadState = (data) => {
    console.log('data: ', data)
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  const { register, setValue, trigger, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})

  
  useEffect(() => {
    dispatch(getTemplatesAsync())
  }, [])
  
  
  return (
    <Form  style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'between', marginTop: '4vh', marginBottom:'15vh'}} >
      <div style={{width:'930px', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
      <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <label className='form-label' style={{width: '175px'}}>SELECCIONE EL TIPO DE RECLAMO*</label>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <select {...register('id')} className="form-input" onChange={(e) => setValue('id', e.target.value, { shouldValidate: true })}>
            <option value="">selecciona una opción...</option>
            {suitsTemplates.map((template) => {
              return <option value={template._id} key={template._id}>{template.name}</option>
            })}
          </select> 
          <span className='form-label'>{errors?.id?.message}</span>
        </div>
      </section>
      <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <label className='form-label' style={{width: '175px'}}>MES PARA EL DOCUMENTO</label>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <input {...register('documentMonth')} className="form-input" type="text" placeholder="Escribe aqui el mes que aparecerá en el documento"/>
          <span className='form-label'>{errors?.documentMonth?.message}</span>
        </div>
      </section>
      <section style={{marginTop: '5vh', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <label className='form-label' style={{width: '175px'}}>AÑO PARA EL DOCUMENTO</label>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <input {...register('documentYear')} className="form-input" type="text" placeholder="Escribe aqui el año que aparecerá en el documento"/>
          <span className='form-label'>{errors?.documentYear?.message}</span>
        </div>
      </section>
      <section style={{marginTop: '5vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginBottom: '80px'}}>
        <div style={{width: '664px'}}>

        <label className='form-label' style={{width: '175px'}}>HECHOS*</label>
        <p className="helperText">
          Realice una descripción de lo sucedido enumerando cada una de las situaciones y colocando en el inicio de cada 
          hecho la fecha y lugar, como se muestra en el ejemplo
        </p>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '5vh'}}>
        <span className='form-label'>{errors?.facts?.message}</span>
          <textarea className='form-textArea' 
          placeholder='
          1. 1/2/2011 descripción del hecho
          2. 3/4/2011 descripción del hecho
          3. 5/5/2011 descripción del hecho
          4. 6/6/2011 descripción del hecho'
          {...register('facts')}
          >
          </textarea>
        </div>
      </section>
      <Row className='align-items-start justify-content-between'>
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
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '15px'}}>

                  <button className={`${step.nextStepButton}`}   onClick={handleSubmit(uploadState)} >
                    SIGUIENTE
                  </button>
                  <div className='stepsContainer' >
                  {steps.map((step, i) =>(
                  <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
                  ))}
                  </div>
                </div>
                </Col>
      </Row>
      </div>
    </Form>
    )
  };