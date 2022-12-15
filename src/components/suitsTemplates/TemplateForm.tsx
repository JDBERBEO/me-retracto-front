import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { postTemplateAsync } from '../../store/features/templates/templatesSlice';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const TemplateForm = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const schema = object({
    formatName: string().required('Este campo es requerido*'),
    internalCode: string().required('Este campo es requerido*'),
    price: string().required('Este campo es requerido*')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const handleOnClick = (data) => {
    const payload = {
      name: data.formatName,
      internalCode: data.internalCode,
      price: data.price,
      file: data.file[0]
    };
    dispatch(postTemplateAsync(navigate, payload));
  };

  return (
    <div>
      <DefaultNavbar />
      <div className="formContainer">
        <form>
          <section className="formContainer__section-template-form">
            <label className="form-label">NOMBRE DEL FORMATO</label>
            <div className="formContainer__section-template-form__inputContainer">
              <input
                className="form-input"
                type="text"
                placeholder="Escribe aqui el nombre de tu nuevo formato de demanda"
                // onChange={(e) => setTemplate({ ...newTemplate, name: e.target.value })}
                {...register('formatName')}
              />
              <span className="form-label span-error">{errors?.formatName?.message}</span>
            </div>
          </section>
          <section className="formContainer__section-template-form">
            <label className="form-label">CÓDIGO INTERNO</label>
            <div className="formContainer__section-template-form__inputContainer">
              <input
                className="form-input"
                type="text"
                placeholder="Escribe aqui el código interno"
                // onChange={(e) => setTemplate({ ...newTemplate, internalCode: e.target.value })}
                {...register('internalCode')}
              />
              <span className="form-label span-error">{errors?.internalCode?.message}</span>
            </div>
          </section>
          <section className="formContainer__section-template-form">
            <label className="form-label">AGREGA EL PRECIO EN CENTAVOS</label>
            <div className="formContainer__section-template-form__inputContainer">
              <input
                className="form-input"
                type="number"
                placeholder="Escribe aqui el código interno"
                // onChange={(e) => setTemplate({ ...newTemplate, price: parseInt(e.target.value) })}
                {...register('price')}
              />
              <span className="form-label span-error">{errors?.price?.message}</span>
            </div>
          </section>
          <section className="formContainer__section-template-form">
            <label className="form-label">SELECCIONA EL ARCHIVO:</label>
            <div className="formContainer__section-template-form__inputContainer">
              <input
                type="file"
                id="file"
                multiple
                style={{ color: 'white' }}
                {...register('file', { required: true })}
              />
              <span className="form-label span-error">{errors?.file?.message}</span>
            </div>
          </section>
          <section className="formContainer__section-template-form">
            <Link to={'/suitsTemplates'}>
              <button className={'nextStepButton__yellow'}>ATRÁS</button>
            </Link>
            <button className={'nextStepButton__yellow'} onClick={handleSubmit(handleOnClick)}>
              ENVIAR
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
