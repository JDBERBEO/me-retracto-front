import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import {object,string} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { postContactUsAsync } from '../../store/features/contactUs/contactUsSlice';
import { useDispatch } from 'react-redux';

export const ContactUs = () => {
  const [contactUs, setContactUs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const dispatch = useDispatch()

  const schema = object({
    name: string().required('El nombre es requerido*'),
    email: string().email('El correo es inválido').required('El correo es requerido*'),
    message: string().required('El mensaje es requerido')
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setContactUs(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const handleOnClick = (data) => {
    // e.preventDefault()
    // console.log(contactUs)
    dispatch(    postContactUsAsync(data)
    )
    console.log('data: ', data)
    reset({name: '', email: '', message: ''})
  }

  const { register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema), defaultValues: {name: '', email: '', message: ''}})

  return (
    <>
    <Col className='d-flex justify-content-center align-items-center'>
      <div className='sueCard'>
        <h1 className='sueCard__title'>CONTÁCTENOS</h1>
        <h5 className='sueCard__subtitle'>amet, consectetuer adipiscing elit, </h5>
        <p className='sueCard__description'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
      </div>
    </Col>
    <Col >
      <div className='contactenos-box'>
        <input 
          className='contactenos-input' 
          {...register('name')}
          placeholder="Nombre..."
        />
          <span>{errors?.name?.message}</span>
          <input 
          className='contactenos-input'
          placeholder='Correo electrónico...' 
          {...register('email')}
        />
        <span>{errors?.email?.message}</span>
        <textarea 
          className='form-text-area' 
          {...register('message')}
        />
        <span>{errors?.message?.message}</span>
        <button 
          className='containerButton__yellow' 
          style={{backgroundColor: '#FAB816', color: 'white'}}
          onClick={handleSubmit(handleOnClick)}>ENVIAR</button>
      </div>
    </Col>
    </>
  )
}
