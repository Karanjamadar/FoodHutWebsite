import img from '../assets/imgs/Image2.jpg'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import registerValidation from '../validations/registerValidation';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { register } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Register = () => {
  const initialFormValues = {
    userName: '',
    email: '',
    phone: '',
    password: '',
  }
  const initialFormErrors = {
    userName: '',
    email: '',
    phone: '',
    password: '',
  }
  const [formValues, setformValues] = useState(initialFormValues)
  const [formErrors, setformErrors] = useState(initialFormErrors)
  const [state, setState] = useState({ phone: '' })


  const formValueData = {
    name: formValues.userName,
    email: formValues.email,
    phone: formValues.phone,
    password: formValues.password,

  }

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const saveUser = async () => {
    const validation = registerValidation(formValues)
    if (Object.keys(validation).length > 0) {
      setformErrors(validation)
    } else {
      dispatch(register(formValueData))
        .unwrap()
        .then((response) => {
          if (response.success === true) {
            swal({
              title: "Success",
              text: response.message,
              icon: "success",
            }).then((willNavigate) => {
              if (willNavigate) {
                navigation('/', { replace: true })
              }
            })
          } else if (response.success === false) {
            swal({
              title: "Failed",
              text: response.message,
              icon: "error",
            });
          }
        })
    }
  }

  const handleName = (e) => {
    setformValues({

      ...formValues,
      userName: e.target.value
    });
    setformErrors({
      ...formErrors,
      userName: '',
    })

  }
  const handleEmail = (e) => {
    setformValues({
      ...formValues,
      email: e.target.value
    });
    setformErrors({
      ...formErrors,
      email: '',
    })


  }
  const handlePhone = (e) => {
    setformValues({
      ...formValues,
      phone: e
    });
    setformErrors({
      ...formErrors,
      phone: '',

    })

  }
  const handlePassword = (e) => {
    setformValues({
      ...formValues,
      password: e.target.value
    });
    setformErrors({
      ...formErrors,
      password: '',
    })

  }
  return (
    <div class="d-lg-flex half">
      <div class="bg order-2 order-md-1" style={{ background: 'url(' + img + ')', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}></div>
      <div class="contents order-1 order-md-2">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <h3 className='text-primary'>Create your account with  <strong className='text-primary'>FoodHut</strong></h3>
              <p className="mb-4 text-dark">FoodHut is the food based website which has millions of customer base so why don't you join us!!!</p>
              <div class="form-group first">
                <label htmlFor="username" className='text-dark'>Name :</label>
                <input type="text" class="form-control bg-light text-dark" id="username" placeholder="Enter your full name" onChange={handleName} value={formValues.userName} />
                {
                  formErrors.userName && <small style={{ color: 'red' }}>{formErrors.userName}</small>
                }
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className='text-dark'>Email Address :</label>
                <input type="email" className="form-control bg-light text-dark" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your email address" value={formValues.email} onChange={handleEmail} />
                {
                  formErrors.email && <small style={{ color: 'red' }}>{formErrors.email}</small>
                }
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className='text-dark '>Phone :</label>
                <PhoneInput
                  inputClass='form-control bg-light text-dark'
                  containerClass='bg-light text-dark'
                  country={'in'}
                  value={formValues.phone}
                  onChange={handlePhone}
                  inputStyle={{ color: 'black', width: '100%' }}
                  placeholder="Enter your phone number"
                  buttonStyle={{ borderWidth: '1', backgroundColor: 'white', width: '8%' }}
                />
                {
                  formErrors.phone && <small style={{ color: 'red' }}>{formErrors.phone}</small>
                }
              </div>
              <div class="form-group last mb-3">
                <label htmlFor="password" className='text-dark'>Password :</label>
                <input type="password" class="form-control bg-light text-dark" id="password" placeholder=" Enter New Password" onChange={handlePassword} value={formValues.password} />
                {
                  formErrors.password && <small style={{ color: 'red' }}>{formErrors.password}</small>
                }
              </div>
              <div class="d-flex mb-5 align-items-center">
                <span class="ml-auto"><Link to='/' replace class="forgot-pass text-primary" >Already have an account?</Link></span>
              </div>
              <input type="submit" value="REGISTER" class="btn btn-block btn-primary" onClick={saveUser} />
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default Register
