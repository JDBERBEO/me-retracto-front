import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import { postLoginAsync } from '../../store/features/admin/adminSlice'
import { postLawyerLoginAsync } from '../../store/features/lawyer/lawyerSlice'
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
    userType: ''
  })

  const handleOnChange = (e) => {
    const {name, value } = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  
  const handleOnSubmit = (user) => {
    if (user.userType==="admin") return dispatch(postLoginAsync(user, navigate))
    if (user.userType==="lawyer") return dispatch(postLawyerLoginAsync(user, navigate))
    return ""
  }
 
  
  return (
    <>
    <DefaultNavbar />
    <div className='feedbackContainer' style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: '20px', margin: '20px', borderRadius: '50px'}}>

      <div  style={{backgroundColor: '#00AC9E', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: "50px", padding:'5px'}}>
        <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color:'white', fontSize: '30px'}}>LOGIN</h2>
      </div>
      <form  onSubmit={(e) => {
        e.preventDefault()
        handleOnSubmit(user)
        }} style={{backgroundColor: '#00AC9E', width: '40%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', margin: '40px'}}>
        <section style={{marginTop: '5vh'}}>
          <label className='form-label' htmlFor='email'>EMAIL</label>
          <input onChange={handleOnChange} className="form-input" id="email" name="email" value={user.email} type="text" placeholder="Escribe aqui el nombre de usuario registrado" />
        </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label' htmlFor='password'>CONTRASEÑA</label>
            <input onChange={handleOnChange} className="form-input" id="password" name="password" value={user.password} type="password" placeholder="Escribe aqui la contraseña" />
          </section>
          <section style={{marginTop: '5vh'}}>
            <label className='form-label' htmlFor='userType'>TIPO DE USUARIO</label>
            <select onChange={handleOnChange} className="form-input" id="userType" name="userType" value={user.userType} >
              <option>selecciona una opción...</option>
              <option value={"lawyer"}>Abogado</option>
              <option value={"admin"}>Administrador</option>
            </select> 
          </section>
          <button style={{backgroundColor: 'white', border:'white solid', borderRadius: '25px', fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 500, color:'#00AC9E', fontSize: '22px', marginTop:"20px" }}>
            ENTRAR
          </button>
      </form>
    </div>
    </>
  )
}
