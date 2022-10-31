import React, { useEffect} from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../common/spinner/Loader.tsx';

export const StepOne = ({
  steps,
  step,
  goNextStep,
  currentStep
}) => {
  const dispatch = useDispatch()
  const { templates, loading} = useSelector((state: any) => (state.templates));

  const schema = object({
    id: string().required('Este campo es requerido*'),
  })

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  useEffect(() => {
    dispatch(getTemplatesAsync())
  }, [])

  const { register, setValue, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
  
  if (loading) return <Row>
    <Col>
    <Row >
        <Col xs={12} className='d-flex flex-column align-items-center justify-content-center' style={{height: '550px'}}>
          <Loader variant={'danger'} />
          <p className='form-label mt-5'>Cargando...</p>
        </Col>
      </Row>
    </Col>
  </Row>
    

  return (
    <Form>
      <section style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:'35vh', width: '100%'}}>
        <div>
          <label className='form-label' >SELECCIONE EL TIPO DE RECLAMO*</label>
          <select style={{width: '400px'}} {...register('id')} className="form-select-basic" onChange={(e) => setValue('id', e.target.value, { shouldValidate: true })}>
            <option value="">Selecciona una opción...</option>
            {!!templates && templates.map((template, i) => {
              return (
                  <option value={template._id} key={template._id} title="TEXTO DE PRUEBA: La publicidad engañosa consiste en que en existe una inconsistencia entre lo ofertada por el proveedor y lo adquirido por el consumidor." >{template.name}</option>
                  )
            })}
          </select> 
          {/* <input className="form-input" type="email" placeholder="Escribe aqui tu correo electrónico" {...register('claimerEmail')}/> */}
        </div>
        <div >
          <span className='form-label'>{errors?.id?.message}</span>
        </div>
      </section>
      <Row className='flex-row-reverse'>
        <Col xs={6}>
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '15px' }}>
            <button className={`${step.nextStepButton}`}   onClick={handleSubmit(uploadState)} >
              SIGUIENTE
            </button>
            <div className='stepsContainer' >
              {steps.map((_, i) =>(
                <div id={i === currentStep - 1 ? 'circleSelected' :  'circle'} key={i}></div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  )
};