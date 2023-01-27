import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



function LoginModal({ handleLoginModal }) {
  const navigation = useNavigate();
  const name = localStorage.getItem('userName')
  const email = localStorage.getItem('userEmail')
  const phone = localStorage.getItem('userPhone')



  const logout = () => {

    swal({
      title: "Are you sure?",
      text: "Once you logged out you need to log in again",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          localStorage.removeItem('userName')
          localStorage.removeItem('userEmail')
          localStorage.removeItem('userPhone')
          localStorage.removeItem('loggedIn')
          navigation('/')
          swal("Logout Successful", {
            icon: "success",
          });
        } else {
          console.log("cancelled")
        }
      });
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
                <p style={{ color: 'black' }}>Full Name: {name}</p>
              </div>
              <div>
                <p style={{ color: 'black' }}>Email: {email}</p>
              </div >
              <div>
                <p style={{ color: 'black' }}> Phone : {phone}</p>
              </div>
            </div>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={logout}> Logout</Button>
          <Button variant="secondary" onClick={handleLoginModal}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </>
  );
}

export default LoginModal