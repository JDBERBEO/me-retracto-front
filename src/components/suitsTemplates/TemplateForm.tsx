import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { postTemplateAsync } from '../../store/features/templates/templatesSlice';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const TemplateForm = () => {
  const [file, setFile] = useState(null);
  const [newTemplate, setTemplate] = useState({
    name: '',
    internalCode: '',
    price: 0
  });
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const schema = object({
    formatName: string().required('Este campo es requerido*'),
    internalCode: string().required('Este campo es requerido*'),
    price: string().required('Este campo es requerido*'),
    file: string().required('Es necesario insertar un archivo*')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { defendantName: 'ErnestoPerez', agreementDate: '20 de septiembre de 03' }
  });

  function changeProfilePhoto(e) {
    setFile(e.target.files[0]);
  }

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const payload = {
      name: newTemplate.name,
      internalCode: newTemplate.internalCode,
      price: newTemplate.price,
      file
    };
    dispatch(postTemplateAsync(navigate, payload));
  };

  return (
    <div>
      <DefaultNavbar />
      <div className="formContainer">
        <form>
          <section className="formContainer__section">
            <label className="form-label">NOMBRE DEL FORMATO</label>
            <input
              className="form-input"
              type="text"
              placeholder="Escribe aqui el nombre de tu nuevo formato de demanda"
              onChange={(e) => setTemplate({ ...newTemplate, name: e.target.value })}
            />
          </section>
          <section className="formContainer__section">
            <label className="form-label">CÓDIGO INTERNO</label>
            <input
              className="form-input"
              type="text"
              placeholder="Escribe aqui el código interno"
              onChange={(e) => setTemplate({ ...newTemplate, internalCode: e.target.value })}
            />
          </section>
          <section className="formContainer__section">
            <label className="form-label">AGREGA EL PRECIO EN CENTAVOS</label>
            <input
              className="form-input"
              type="number"
              placeholder="Escribe aqui el código interno"
              onChange={(e) => setTemplate({ ...newTemplate, price: parseInt(e.target.value) })}
            />
          </section>
          <section className="formContainer__section">
            <label className="form-label">SELECCIONA EL ARCHIVO:</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={changeProfilePhoto}
              style={{ color: 'white' }}
            />
          </section>
          <section className="formContainer__section">
            <Link to={'/suitsTemplates'}>
              <button className={'nextStepButton__yellow'}>ATRÁS</button>
            </Link>
            <button className={'nextStepButton__yellow'} onClick={handleOnClick}>
              ENVIAR
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
