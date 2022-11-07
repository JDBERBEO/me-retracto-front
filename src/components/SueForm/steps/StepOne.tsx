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

  let options
if (!!templates && !!templates.length) {
  options = templates.map((template) => {
    return {
      value: template._id,
      label: (
        <Tooltip placement="right" title={template.name} arrow>
          <span>{template.name}</span>
        </Tooltip>
      )
    }
  })
}

const customOption = props => {
  return (
    <Tooltip title={props.label} arrow>
      <><Option {...props} /></>
    </Tooltip>
  );
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
        {/* <div> */}
          <label className='form-label' >SELECCIONE EL TIPO DE RECLAMO*</label>
            <Select
                {...register('id')} onChange={(option) => setValue('id', option?.value, { shouldValidate: true })}
                components={{
                  Option: customOption,
                  NoOptionsMessage
                }}
                className="basic-single"
                classNamePrefix="select"
                name={'loquesea'}
                isSearchable={false}
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
                    : "2px solid white",
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
                    marginLeft: '30px',
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
            <span className='form-label'>{errors?.id?.message}</span>
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