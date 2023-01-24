import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerValidation from '../validations/registerValidation';
// import 'bootstrap/dist/css/bootstrap.min.css';






function RegistrationModal({ handleRegisterModal }) {

  const hideLoginModal = () => {
    handleRegisterModal()
  }
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


  const formValueData = {
    name: formValues.userName,
    email: formValues.email,
    phone: formValues.phone,
    password: formValues.password,

  }

  const saveUser = async () => {
    const validation = registerValidation(formValues)
    if (Object.keys(validation).length > 0) {
      setformErrors(validation)
      // toast("check fields")
    } else {
      const resp = await axios.post('http://localhost:3001/register', formValueData)
      if (resp) {
        console.log(resp?.data)
        toast(resp.data.message)

      }
    }
  }
  const navigation = useNavigate()

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
      phone: e.target.value
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
    <>
      <Modal show={handleRegisterModal} onHide={handleRegisterModal}>
        <Modal.Header style={{ backgroundColor: '' }}>
          <Modal.Title style={{ color: 'black' }}>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{ color: 'black' }}>Name :</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" onChange={handleName} value={formValues.userName} />
              {
                formErrors.userName && <small style={{ color: 'red' }}>{formErrors.userName}</small>
              }
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{ color: 'black' }}>Email address :</label>
              <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your email address" value={formValues.email} onChange={handleEmail} />
              {
                formErrors.email && <small style={{ color: 'red' }}>{formErrors.email}</small>
              }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{ color: 'black' }}>Phone :</label>
              <input type="tel" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter your phone number" onChange={handlePhone} value={formValues.phone} maxLength={10} />
              {
                formErrors.phone && <small style={{ color: 'red' }}>{formErrors.phone}</small>
              }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" style={{ color: 'black' }}>Password :</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" Enter New Password" onChange={handlePassword} value={formValues.password} />
              {
                formErrors.password && <small style={{ color: 'red' }}>{formErrors.password}</small>
              }
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegisterModal}>
            Close
          </Button>
          <button type="submit" className="btn btn-primary" onClick={saveUser}>Submit</button>
        </Modal.Footer>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Modal>
    </>
  );
}

export default RegistrationModal