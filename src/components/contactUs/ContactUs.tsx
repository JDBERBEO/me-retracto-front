import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { postContactUsAsync } from '../../store/features/contactUs/contactUsSlice';
import { useDispatch } from 'react-redux';
import types from '../../constants/types';

export const ContactUs = () => {
  const [contactUs, setContactUs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const dispatch = useDispatch();

  const schema = object({
    name: string().required('El nombre es requerido*'),
    email: string().email('El correo es inválido').required('El correo es requerido*'),
    message: string().required('El mensaje es requerido')
  });

  const handleOnClick = (data) => {
    dispatch(postContactUsAsync(data));
    reset({ name: '', email: '', message: '' });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', message: '' }
  });

  return (
    <>
      <Col className="d-flex justify-content-center align-items-center">
        <div className="sueCard">
          <h1 className="sueCard__title">{types.contactUs.title}</h1>
          <h5 className="sueCard__subtitle">{types.contactUs.subtitle}</h5>
          <p className="sueCard__description">{types.contactUs.description}</p>
        </div>
      </Col>
      <Col>
        <div className="contactenos-box">
          <input className="contactenos-input" {...register('name')} placeholder="Nombre..." />
          <span>{errors?.name?.message}</span>
          <input
            className="contactenos-input"
            placeholder="Correo electrónico..."
            {...register('email')}
          />
          <span>{errors?.email?.message}</span>
          <textarea className="form-text-area" {...register('message')} />
          <span>{errors?.message?.message}</span>
          <button
            className="containerButton__yellow"
            style={{ backgroundColor: '#FAB816', color: 'white' }}
            onClick={handleSubmit(handleOnClick)}>
            {types.contactUs.submitButton}
          </button>
        </div>
      </Col>
    </>
  );
};
