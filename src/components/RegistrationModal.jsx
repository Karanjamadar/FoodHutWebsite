import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import registerValidation from '../validations/registerValidation';
import swal from 'sweetalert';

function RegistrationModal({ handleRegisterModal }) {

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
    } else {
      const resp = await axios.post('http://localhost:3001/register', formValueData);
      if (resp) {
        console.log(resp.data);
        handleRegisterModal()
        swal({
          title: "Success",
          text: resp.message,
          icon: "success",
        });

      }
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
          <Modal.Title className='text-primary'>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className='text-dark'>Name :</label>
              <input type="text" className="form-control bg-light text-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" onChange={handleName} value={formValues.userName} />
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
              <label htmlFor="exampleInputEmail1" className='text-dark'>Phone :</label>
              <input type="tel" className="form-control bg-light text-dark" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter your phone number" onChange={handlePhone} value={formValues.phone} maxLength={10} />
              {
                formErrors.phone && <small style={{ color: 'red' }}>{formErrors.phone}</small>
              }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className='text-dark'>Password :</label>
              <input type="password" className="form-control bg-light text-dark" id="exampleInputPassword1" placeholder=" Enter New Password" onChange={handlePassword} value={formValues.password} />
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
      </Modal>
    </>
  );
}

export default RegistrationModal