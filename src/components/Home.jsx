import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

import images from '../const/images'
import Food from './Food'
import Juice from './Juice'
import GoogleMap from './GoogleMap'

const Home = () => {
  const [show, setShow] = useState('juice');
  return (
    <div>

      <header id="home" className="header">
        <div className="overlay text-white text-center">
          <h1 className="display-2 font-weight-bold ">FoodHut</h1>
          <h2 className="display-4 mb-5">Always fresh &amp; Delightful</h2>
          <Link className="btn btn-lg btn-primary" to="/gallery">View Our gallary</Link>
        </div>
      </header>

      <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table">
        <div className="">
          <h2 className="section-title mb-5">BOOK A TABLE</h2>
          <div className="row mb-5">
            <div className="col-sm-6 col-md-3 col-xs-12 my-2">
              <input type="email" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="EMAIL" />
            </div>
            <div className="col-sm-6 col-md-3 col-xs-12 my-2">
              <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="NUMBER OF GUESTS" max="20" min="0" />
            </div>
            <div className="col-sm-6 col-md-3 col-xs-12 my-2">
              <input type="time" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="EMAIL" />
            </div>
            <div className="col-sm-6 col-md-3 col-xs-12 my-2">
              <input type="date" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="12/12/12" />
            </div>
          </div>
          <a href="#" className="btn btn-lg btn-primary" id="rounded-btn">FIND TABLE</a>
        </div>
      </div>

      <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
        <h2 className="section-title py-5">EVENTS AT THE FOOD HUT</h2>
        <div className="row justify-content-center">
          <div className="col-sm-7 col-md-4 mb-5">
            <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <Link className="btn btn-primary  ml-5" id="pills-home-tab" to={"#foods"} role="tab" aria-controls="pills-home" onClick={() => setShow('foods')}>Foods</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary mr-5" id="pills-home-tab" to={"#juice"} role="tab" aria-controls="pills-profile" onClick={() => setShow('juice')}>Juices</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {
            show === 'juice' ? <Juice /> : <Food />
          }
        </div>
      </div>

      <div id="testmonial" className="container-fluid wow fadeIn bg-secondary text-light has-height-lg middle-items">
        <h2 className="section-title my-5 text-center">REVIEWS</h2>
        <div className="row mt-3 mb-5">
          <div className="col-md-4 my-3 my-md-0">
            <div className="testmonial-card">
              <h3 className="testmonial-title">John Doe</h3>
              <h6 className="testmonial-subtitle">Web Designer</h6>
              <div className="testmonial-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 my-md-0">
            <div className="testmonial-card">
              <h3 className="testmonial-title">Steve Thomas</h3>
              <h6 className="testmonial-subtitle">UX/UI Designer</h6>
              <div className="testmonial-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus obcaecati cum eligendi perferendis magni dolorum ipsum magnam, sunt reiciendis natus. Aperiam!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3 my-md-0">
            <div className="testmonial-card">
              <h3 className="testmonial-title">Miranda Joy</h3>
              <h6 className="testmonial-subtitle">Graphic Designer</h6>
              <div className="testmonial-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nam. Earum nobis eligendi, dignissimos consequuntur blanditiis natus. Aperiam!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="container-fluid bg-dark text-light border-top wow fadeIn">
        <div className="row">
          <div className="col-md-6 px-0">
            <GoogleMap />
          </div>
          <div className="col-md-6 px-5 has-height-lg middle-items">
            <h3>FIND US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam doloremque odio delectus, sunt magnam laborum impedit molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et, adipisci illo quam.</p>
            <div className="text-muted">
              <p><span className="ti-location-pin pr-3"></span> 12345 Fake ST NoWhere, AB Country</p>
              <p><span className="ti-support pr-3"></span> (123) 456-7890</p>
              <p><span className="ti-email pr-3"></span>www.FoodHut.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary text-light has-height-md middle-items border-top text-center wow fadeIn">
        <div className="row">
          <div className="col-sm-4">
            <h3>EMAIL US</h3>
            <p className="text-muted">info@website.com</p>
          </div>
          <div className="col-sm-4">
            <h3>CALL US</h3>
            <p className="text-muted">(123) 456-7890</p>
          </div>
          <div className="col-sm-4">
            <h3>FIND US</h3>
            <p className="text-muted">12345 Fake ST NoWhere AB Country</p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center border-top wow fadeIn">
        <p className="mb-0 py-3 text-muted small">&copy; Copyright {new Date().getFullYear()}</p>
      </div>
    </div >
  )
}

export default Home
