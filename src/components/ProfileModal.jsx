import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import images from '../const/images';



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
          navigation('/',{replace:true})
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

            <img src={images.profile} style={{height:80,width:80}}/>
                      <ul class="list-unstyled mb-1-9 my-3">
                                    <li class="mb-2 mb-xl-3 display-28" style={{ color: 'black' }}><span class="display-26 text-secondary me-2 font-weight-600" >Full Name:</span> {name}</li>
                                    <li class="mb-2 mb-xl-3 display-28" style={{ color: 'black' }}><span class="display-26 text-secondary me-2 font-weight-600">Email:</span> {email}</li>
                                    <li class="mb-2 mb-xl-3 display-28" style={{ color: 'black' }}><span class="display-26 text-secondary me-2 font-weight-600">Phone:</span> {phone}</li>
                                    <li class="mb-2 mb-xl-3 display-28" style={{ color: 'black' }}><span class="display-26 text-secondary me-2 font-weight-600">Website:</span> www.FoodHut.com</li>
                                </ul>
            {/* <div>
              <div>
                <p style={{ color: 'black' }}>Full Name: {name}</p>
              </div>
              <div>
                <p style={{ color: 'black' }}>Email: {email}</p>
              </div >
              <div>
                <p style={{ color: 'black' }}> Phone : {phone}</p>
              </div>
            </div> */}

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