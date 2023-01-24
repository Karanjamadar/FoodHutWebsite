import Axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import img from '../assets/imgs/about-section.jpg'
import loginValidation from '../validations/loginValidation'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import RegistrationModal from './RegistrationModal';

// import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {

  const initialFormValues = {
    email: '',
    password: '',
  }
  const initialFormErrors = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [showRegisterModal, setShowRegisterModal] = useState(false)


  const handleRegisterModal = () => {

    setShowRegisterModal(showRegisterModal => !showRegisterModal)



  }
  const navigate = useNavigate()



  const handleEmail = (e) => {
    setFormValues({
      ...formValues,
      email: e.target.value
    });
    setFormErrors({
      ...formErrors,
      email: '',
    })

  }
  const handlePassword = (e) => {
    setFormValues({
      ...formValues,
      password: e.target.value
    });
    setFormErrors({
      ...formErrors,
      password: '',
    })

  }
  const formValuesData = {
    email: formValues.email,
    password: formValues.password
  }
  const dispatch = useDispatch()
  // const {is}
  const handleSubmit = async () => {
    let validateResponse = loginValidation(formValues);
    if (Object.keys(validateResponse).length > 0) {
      setFormErrors(validateResponse);
    } else {
      dispatch(login(formValuesData))
        .unwrap()
        .then(response => {
          if (response.status === 'ok') {
            alert(response.message)
            navigate('home', { replace: true });
            localStorage.setItem('userName', response.data.name)
            localStorage.setItem('userEmail', response.data.email)
            localStorage.setItem('userPhone', response.data.phone)
          } else if (response.status === 'error') {
            toast(response.message)
          }
        })
      // const resp = await Axios.post('http://localhost:3001/login', formValuesData)
      // token:window.localStorage.getItem('token')
      // console.log(resp)
      // if (resp) {
      //   toast(resp.data?.message)
      //   // navigate.replace('home')
      //   navigate.goBack()

      //   // const token = localStorage.setItem(resp.data?.token)
      // } else {
      //   toast(resp.data?.message)
      // }
    }
  }

  // const loginCallback = () => {
  //   navigate('login')

  // }
  return (
    <div className="d-lg-flex half" >
      <div className="bg order-1 order-md-2" style={{ background: 'url(' + img + ')', backgroundSize: 'auto' }}></div>
      <div className="contents order-2 order-md-1">

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>Login to <strong>Colorlib</strong></h3>
              <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
              <div>
                <div className="form-group first">
                  <label htmlFor="exampleInputEmail1" style={{ color: 'black' }}>Email :</label>
                  <input type="tel" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter your email address" onChange={handleEmail} value={formValues.email} />
                  {formErrors.email &&
                    <small style={{ color: 'red' }}>{formErrors.email}</small>
                  }
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="exampleInputPassword1" style={{ color: 'black' }}>Password :</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Enter your Password" onChange={handlePassword} value={formValues.password} />
                  {formErrors.password &&
                    <small style={{ color: 'red' }}>{formErrors.password}</small>
                  }

                </div>

                <div className="d-flex mb-5 align-items-center">

                  <span className="ml-auto"><a href="#" className="forgot-pass" onClick={handleRegisterModal}> Don't have an account?</a></span>
                </div>
                {
                  showRegisterModal && <RegistrationModal handleRegisterModal={handleRegisterModal}/>
                }

                <button type='submit' className="btn btn-block btn-primary" onClick={handleSubmit}>Submit</button>
                <ToastContainer position='top-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
