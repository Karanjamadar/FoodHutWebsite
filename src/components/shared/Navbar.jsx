import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/foodhut.css"
import images from '../../const/images';

import { useNavigate } from 'react-router-dom';
import logo from "../../assets/imgs/logo.svg";
import LoginModal from '../ProfileModal';
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
            <Link class="cart_link" to="#">
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactUs">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link ><img src={images.profile} style={{ height: 50, width: 50 }} onClick={handleLoginModal} /></Link>
          </li>
          {
            showLoginModalVisible && <LoginModal handleLoginModal={handleLoginModal} />
          }
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
