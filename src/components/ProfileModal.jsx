import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LoginModal({ handleLoginModal }) {
  const name = localStorage.getItem('userName')
  const email = localStorage.getItem('userEmail')
  const phone = localStorage.getItem('userPhone')

  const hideLoginModal = () => {
    handleLoginModal()
  }

  const logout = ()=>{
    if(window.confirm("Do you really want to logout??")){
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userPhone')
    localStorage.removeItem('loggedIn')
    alert('sign out successfully')
    }else{
      console.log("cancelled")
    }

  }
 


  return (
    <>
      
          <Modal show={handleLoginModal}>
            <Modal.Header>
              <Modal.Title style={{ color: 'black' }}>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
            <div>
              <div>
                <p style={{color:'black'}}>Full Name: {name}</p>
              </div>
              <div>
                <p style={{color:'black'}}>Email: {email}</p>
              </div >
              <div>
                <p style={{color:'black'}}> Phone : {phone}</p>
              </div>
              </div>
               
              </Form>
            </Modal.Body>
            <Modal.Footer>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Link style={{ color: 'blue', justifyItems: 'center' }} onClick={logout} >Logout</Link>
                </Form.Group>
              <Button variant="secondary" onClick={handleLoginModal}>
                Close
              </Button>
              
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
              theme="dark"
            />

          </Modal>
      

    </>
  );
}

export default LoginModal