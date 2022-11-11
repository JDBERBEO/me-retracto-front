import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  getOneClaimAsync,
  updateClaimAsync,
  updateClaimStatusAsync
} from '../../store/features/claims/claimsSlice';
import { FeedbackModal } from '../common/feedbackModal/FeedbackModal.tsx';
import { Loader } from '../common/spinner/Loader.tsx';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ConfimationModal } from '../common/confirmationModal/ConfirmationModal.tsx';
import Select, { components } from 'react-select';

export const EditedClaimForm = () => {
  const [file, setFile] = useState(null);
  const selectFileRef = useRef(null);
  const dispatch = useDispatch<any>();
  const loading = useSelector((state) => state.claims.loading);
  const navigate = useNavigate();
  const { id } = useParams();

  const schema = object({
    claimStatus: string().required('El campo es requerido*')
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const handleOnClickFile = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const payload = {
      file,
      id
    };
    dispatch(updateClaimAsync(payload));
    selectFileRef.current.value = null;
    setFile(null);
  };

  const handleOnClickStatus = (data, e) => {
    e.preventDefault();
    const payload = {
      status: data.claimStatus,
      id
    };
    dispatch(updateClaimStatusAsync(navigate, payload));
  };

  function changeFile(e) {
    setFile(e.target.files[0]);
  }

  const { Option } = components;
  const customOption = (props) => {
    return (
      <>
        <Option {...props} />
      </>
    );
  };

  const options = [
    {
      value: 'notChecked',
      label: 'Sin revisar'
    },
    {
      value: 'underStudy',
      label: 'En revisión'
    },
    {
      value: 'analysisCompleted',
      label: 'Revisión Finalizada'
    }
  ];

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">no hay opciones relacionadas</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <div>
      <DefaultNavbar />
      <FeedbackModal />
      {loading ? <Loader variant={'warning'} /> : null}
      <form>
        <div className="formContainer">
          <section className="formContainer__section-column">
            <label className="form-label">SELECCIONA EL ARCHIVO:</label>
            <input
              ref={selectFileRef}
              type="file"
              id="file"
              multiple
              onChange={changeFile}
              style={{ color: 'white' }}
            />
          </section>
          <section className="formContainer__section-column">
            <button className={'nextStepButton__yellow'} onClick={handleOnClickFile}>
              ACTUALIZAR
            </button>
          </section>
        </div>
      </form>
      <form>
        <div className="formContainerPurple">
          <section className="formContainer__section-column">
            <label className="form-label" htmlFor="userType">
              SELECCIONA EL ESTADO{' '}
            </label>
            {/* <select  
                className="form-input" 
                id="claimStatus" 
                {...register('claimStatus')} 
                onChange={(e) => setValue('claimStatus', e.target.value, { shouldValidate: true })} 
                >
                <option value="">selecciona una opción...</option>
                <option value={"notChecked"}>Sin revisar</option>
                <option value={"underStudy"}>En revisión</option>
                <option value={"analysisCompleted"}>Revisión Finalizada</option>
              </select>
              <span className='form-label'>{errors?.claimStatus?.message}</span> */}
            <Select
              {...register('claimStatus')}
              onChange={(option) =>
                setValue('claimStatus', option?.value, { shouldValidate: true })
              }
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
                menu: (base) => ({
                  ...base,
                  marginTop: '5px',
                  background: 'transparent',
                  borderRadius: 25,
                  border: '2px solid white',
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
                  background: 'transparent',
                  borderRadius: 25,
                  display: 'flex',
                  height: '55px',
                  width: '400px',
                  border: state.isFocused ? '2px solid white' : '2px solid white',
                  // This line disable the blue border
                  boxShadow: state.isFocused ? 0 : 0,
                  '&:hover': {
                    border: state.isFocused ? '2px solid white' : '2px solid white'
                  }
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#fff'
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  color: 'white' // Custom colour
                }),
                noOptionsMessage: (base) => ({
                  ...base,
                  color: 'white' // Custom colour
                }),
                container: (provided, state) => ({
                  ...provided,
                  marginTop: 8,
                  color: 'white',
                  fontFamily: "'Raleway', 'sans-serif'",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginWeft: '30px'
                }),
                valueContainer: (provided, state) => ({
                  ...provided,
                  overflow: 'visible',
                  color: 'white',
                  fontFamily: "'Raleway', 'sans-serif'",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginWeft: '30px'
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  color: 'white',
                  fontFamily: "'Raleway', 'sans-serif'",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginLeft: '30px'
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? 'white' : 'white',
                  fontFamily: "'Raleway', 'sans-serif'",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginWeft: '30px',
                  padding: 10,
                  background: state.isSelected ? 'transparent' : null,
                  borderRadius: '25px',

                  '&:hover': {
                    color: state.isSelected ? 'white' : 'white',
                    borderRadius: '25px',
                    border: '2px solid white',
                    backgroundColor: state.isFocused ? '#4B0082' : '#4B0082'
                  }
                }),
                input: (provided, state) => ({
                  ...provided,
                  color: 'white',
                  fontFamily: "'Raleway', 'sans-serif'",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '2px',
                  marginWeft: '30px',
                  padding: 10
                })
              }}
            />
            <span className="form-label">{errors?.claimStatus?.message}</span>
          </section>
          <section className="formContainer__section" style={{ marginTop: '100px' }}>
            <Link to={'/lawyerClaims'}>
              <button className={'nextStepButton__yellow'}>ATRÁS</button>
            </Link>
            <button
              className={'nextStepButton__yellow'}
              onClick={handleSubmit(handleOnClickStatus)}
            >
              ACTUALIZAR
            </button>
          </section>
        </div>
      </form>
      <div className="formContainer">
        <section className="formContainer__section">
          <ConfimationModal claimId={id} />
        </section>
      </div>
    </div>
  );
};
