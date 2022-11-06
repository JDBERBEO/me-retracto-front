import React, { useEffect} from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { fillClaimAsync } from '../../../store/features/claims/claimsSlice';
import { getTemplatesAsync } from '../../../store/features/templates/templatesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../common/spinner/Loader.tsx';
import Tooltip from '@mui/material/Tooltip';
import Select, { components } from "react-select";

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
    otro: string().required('Este campo es requerido*'),
  })

  const uploadState = (data) => {
    dispatch(fillClaimAsync(data))
    goNextStep()
  }

  useEffect(() => {
    dispatch(getTemplatesAsync())
  }, [])

  const { register, setValue, handleSubmit, formState: {errors}} = useForm({mode: 'onChange', resolver: yupResolver(schema)})
  

  const { Option } = components;
const primaryColor = "#333";
const primaryColorLight = "#333717";

const options = [
  {
    value: "chocolate",
    label: (
      <Tooltip placement="right" title="chocolate" arrow>
        <span>Chocolate</span>
      </Tooltip>
    )
  },
  {
    value: "strawberry",
    label: (
      <Tooltip placement="right" title="strawberry" arrow>
        <span>Strawberry</span>
      </Tooltip>
    )
  },
  {
    value: "vanilla",
    label: (
      <Tooltip placement="right" title="Vanilla" arrow>
        <span>Vanilla</span>
      </Tooltip>
    )
  }
];

const customOption = props => {
  return (
    <Tooltip title={props.label} arrow>
      <><Option {...props} /></>
    </Tooltip>
  );
};

const msgStyles = {
  background: "skyblue",
  color: "white"
};

const NoOptionsMessage = props => {
  return (
    <components.NoOptionsMessage {...props}>
      <span className="custom-css-class">no hay opciones relacionadas</span> 
    </components.NoOptionsMessage>
  );
};

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
      <Select
          {...register('otro')} onChange={(option) => setValue('otro', option?.value, { shouldValidate: true })}
          components={{
            Option: customOption,
            NoOptionsMessage
          }}
          className="basic-single"
          classNamePrefix="select"
          name={'loquesea'}
          // style={{color:'white'}}
          options={options}
          placeholder={'Selecciona una opción...'}
          styles={{
            menu: base => ({
              ...base,
              marginTop: '5px',
              background: "#EB646F",
              borderRadius: 25,
              border: "2px solid white",
              color: 'white'
            }),
            control: (base, state) => ({
              // none of react-select's styles are passed to <Control />
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
              background: "#EB646F",
              borderRadius: 25,
              display: "flex",
              height: '55px',
              width: '470px',
              border: state.isFocused
                ? "2px solid white"
                : "2px solid white", //${primaryColor}
              // This line disable the blue border
              boxShadow: state.isFocused ? 0 : 0,
              "&:hover": {
                border: state.isFocused
                  ? "2px solid white"
                  : "2px solid white"
              },
            }),
            singleValue: base => ({
              ...base,
              color: "#fff"
            }),
            dropdownIndicator: base => ({
              ...base,
              color: "white" // Custom colour
            }),
            noOptionsMessage: base => ({
              ...base,
              color: "white", // Custom colour
            }),
            container: (provided, state) => ({
              ...provided,
              marginTop: 8,
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
            }),
            valueContainer: (provided, state) => ({
              ...provided,
              overflow: "visible",
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
              // position: "relative",
              // display: "block",
              // top: state.hasValue || state.selectProps.inputValue ? -4 : "47%",
              // transition: "top 0.1s, font-size 0.1s",
              // fontSize:
              //   state.hasValue || state.selectProps.inputValue ? 12 : "1rem",
              // color:
              //   state.hasValue ||
              //   state.selectProps.inputValue ||
              //   state.isFocused
              //     ? primaryColor
              //     : "#757575",
              // marginBottom: 20,
              // background: "linear-gradient(to top,#ffffff 60%,#fff0 50%)",
              // backgroundSize: "60% auto",
              // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              // padding: "0px 5px",
              // marginLeft: 0,
              // borderTopRightRadius: 20,
              // borderTopLeftRadius: 20
            }),
            option: (provided, state) => ({
              ...provided,
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
              padding: 10,
              background: state.isSelected ? "#EB646F" : null,
              borderRadius: '25px',
              
              "&:hover": {
                color: state.isSelected ? 'white': "#EB646F",
                borderRadius: '25px',
                border: "2px solid white"
              },
            }),
            input: (provided, state) => ({
              ...provided,
              color: 'white',
              fontFamily: "'Raleway', 'sans-serif'",
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '2px',
              marginWeft: '30px',
              padding: 10,
            }),
          }}
        />
<span className='form-label'>{errors?.otro?.message}</span>
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