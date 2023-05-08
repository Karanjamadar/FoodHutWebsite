import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../assets/css/foodhut.css"
import images from '../../const/images';

import { useNavigate } from 'react-router-dom';
import logo from "../../assets/imgs/logo.svg";
import LoginModal from '../ProfileModal';
import swal from 'sweetalert';
const Navbar = () => {
  const navigation = useNavigate()
  const [showLoginModalVisible, setShowLoginModalVisible] = useState(false)
  const [showRegisterModalVisible, setShowRegisterModalVisible] = useState(false)

  const handleLoginModal = () => {
    setShowLoginModalVisible(showLoginModalVisible => !showLoginModalVisible)
  }
  const handleRegisterModal = () => {
    setShowRegisterModalVisible(showRegisterModalVisible => !showRegisterModalVisible)
  }
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
          navigation('/', { replace: true })
          swal("Logout Successful", {
            icon: "success",
          });
        } else {
          console.log("cancelled")
        }
      });
  }

  return (
    <nav className="navbar navbar-expand-sm  navbar-dark fixed-top bg-primary border-bottom ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallary</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/available">Available</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <Link className="navbar-brand m-auto" to="#">
          <h1 className="font-weight-bold">Food Hut</h1>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="cart_link" to="#">
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactUs">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className='mr-3' to="/cart"><img src={images.cart} style={{ height: 30, width: 30 }} /></Link>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <Link className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><img src={images.profile} style={{ height: 35, width: 35 }} /></Link>
              <div className="dropdown-menu rounded-5 border-5" aria-labelledby="dropdownMenuButton" style={{ marginLeft: -110 }}>
                <Link className="dropdown-item text-primary" onClick={handleLoginModal}>Profile</Link>
                <a className="dropdown-item text-primary" href="#">Another action</a>
                <Link className="dropdown-item text-primary" onClick={logout}>Logout</Link>
              </div>
            </div>
          </li>
          {/* <li className="nav-item">
            <Link ><img src={images.profile} style={{ height: 50, width: 50 }} onClick={handleLoginModal} /></Link>
          </li> */}
          {
            showLoginModalVisible && <LoginModal handleLoginModal={handleLoginModal} />
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
