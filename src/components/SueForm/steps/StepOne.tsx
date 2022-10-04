import React, { useEffect} from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useDispatch, useSelector } from 'react-redux';

export const StepOne = ({
  // setNewEmail,
  // handleSubmit
  i,
  goPreviousStep,
  steps,
  step,
  handleOnClick,
  goNextStep,
  currentStep
}) => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state: any) => (state.templates.templates));

  const schema = object({
    id: string().required('Este campo es requerido*'),
    // claimerEmail: string().email('El correo es inválido*').required('El correo es requerido*'),
  })

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  useEffect(() => {
    dispatch(getTemplatesAsync())
  }, [])

  const { register, setValue, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
  return (
    <Form>
      {/* <pre>{console.log(errors)}</pre> */}
      <section style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:'35vh', width: '100%'}}>
        <div>
          <label className='form-label' >SELECCIONE EL TIPO DE RECLAMO*</label>
          <select style={{width: '400px'}} {...register('id')} className="form-select-basic" onChange={(e) => setValue('id', e.target.value, { shouldValidate: true })}>
            <option value="">Selecciona una opción...</option>
            {suitsTemplates.map((template, i) => {
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
      {/* <form>
  <script
    src="https://checkout.wompi.co/widget.js"
    data-render="button"
    data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
    data-currency="COP"
    data-amount-in-cents="4950000"
    data-reference="4XMPGKWWPKWQ"
    data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
    >
  </script>
</form> */}
      <Row className='flex-row-reverse'>
                <Col xs={6}>
                  <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '15px' }}>
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
    </Form>

    
    )
};