import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { postLoginAsync } from '../../store/features/admin/adminSlice'
import { postLawyerLoginAsync } from '../../store/features/lawyer/lawyerSlice'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import Select, { components } from "react-select";

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const adminError = useSelector((state) => (state.admin.error
  ))
  const lawyerError = useSelector((state) => (state.lawyer.error))

  const schema = object({
    email: string().email('El correo es inválido*').required('El correo es requerido*'),
    password: string().required('Este campo es requerido*'),
    userType: string().required('Este campo es requerido*')
  })

  const { register, setValue, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  
  const handleOnSubmit = (data) => {
    if (data.userType==="admin") return dispatch(postLoginAsync(data, navigate))
    if (data.userType==="lawyer") return dispatch(postLawyerLoginAsync(data, navigate))
    return ""
  }

  const { Option } = components;
  const customOption = props => {
    return (
        <><Option {...props} /></>
    );
  };

  const options = [
    {
      value: "lawyer",
      label:"Abogado"
    },
    {
      value: 'admin',
      label: 'Administrador'
    }
  ]

  const NoOptionsMessage = props => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">no hay opciones relacionadas</span> 
      </components.NoOptionsMessage>
    );
  };

  return (
    <>
    <DefaultNavbar />
    <div className='feedbackContainer' style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: '20px', margin: '20px', borderRadius: '50px'}}>
      <div  style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: "50px", padding:'5px'}}>
        <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:'white', fontSize: '30px'}}>LOGIN</h2>
      </div>
        {adminError || lawyerError ? <span className='form-label'>Usuario o contraseña incorrecta*</span> : null}
      <form style={{backgroundColor: '#00AC9E', width: '40%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: '40px'}}>
        <section style={{marginTop: '5vh',minHeight:'110px', display:'flex', flexDirection:'column'}}>
          <label className='form-label' htmlFor='email'>EMAIL</label>
          <input {...register('email')} className="form-input" id="email" name="email"  type="text" placeholder="Escribe aqui el nombre de usuario registrado" />
          <span className='form-label'>{errors?.email?.message}</span>
        </section>
          <section style={{marginTop: '5vh', minHeight:'110px', display:'flex', flexDirection:'column'}}>
            <label className='form-label' htmlFor='password'>CONTRASEÑA</label>
            <input {...register('password')} className="form-input" id="password" name="password"  type="password" placeholder="Escribe aqui la contraseña" />
            <span className='form-label'>{errors?.password?.message}</span>
          </section>
          <section style={{marginTop: '5vh', minHeight:'110px', display:'flex', flexDirection:'column'}}>
            <label className='form-label' htmlFor='userType'>TIPO DE USUARIO</label>
            <Select
                {...register('userType')} onChange={(option) => setValue('userType', option?.value, { shouldValidate: true })}
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
                    background: "transparent",
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
                    background: "transparent",
                    borderRadius: 25,
                    display: "flex",
                    height: '55px',
                    width: '400px',
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
                    color: state.isSelected ? 'green': "green",
                    fontFamily: "'Raleway', 'sans-serif'",
                    fontWeight: 400,
                    fontSize: '12px',
                    letterSpacing: '2px',
                    marginWeft: '30px',
                    padding: 10,
                    background: state.isSelected ? "transparent" : null,
                    borderRadius: '25px',
                    
                    "&:hover": {
                      color: state.isSelected ? 'green': "green",
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
            <span className='form-label'>{errors?.userType?.message}</span>
          </section>
          <button onClick={
        handleSubmit(handleOnSubmit)
        } style={{backgroundColor: 'white', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'#00AC9E', fontSize: '22px', marginTop:"80px" }}>
            ENTRAR
          </button>
      </form>
    </div>
    </>
  )
}
