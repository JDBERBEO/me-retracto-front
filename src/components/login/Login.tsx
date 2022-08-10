import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { postLoginAsync } from '../../store/features/admin/adminSlice'
import { postLawyerLoginAsync } from '../../store/features/lawyer/lawyerSlice'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

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
            <select {...register('userType')} onChange={(e) => setValue('userType', e.target.value, { shouldValidate: true })} className="form-input" id="userType" name="userType" >
              <option value="">selecciona una opción...</option>
              <option value={"lawyer"}>Abogado</option>
              <option value={"admin"}>Administrador</option>
            </select> 
            <span className='form-label'>{errors?.userType?.message}</span>
          </section>
          <button onClick={
        handleSubmit(handleOnSubmit)
        } style={{backgroundColor: 'white', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'#00AC9E', fontSize: '22px', marginTop:"20px" }}>
            ENTRAR
          </button>
      </form>
    </div>
    </>
  )
}
