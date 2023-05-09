import React, { useState } from 'react'
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../assets/css/foodhut.css"
import PaymentCheckoutPage from './PaymentCheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const stripePromise = loadStripe("pk_test_51N5iMISGM6xkQUhYZiOJ54hbUzuKCYsPpUvKaKPmU2keEiFRjHMBH13OKF0doW0hhbTvdlHfuqw4lmWxc7hoRD3100WQfvpXrT");

const StripePaymentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("foodName");
  const price = searchParams.get("amount");
  const totalQuantity = searchParams.get("qty");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  console.log({ paymentCompleted })

  const { isLoading } = useSelector((state => state.stripe))

  const successMessage = () => {
    return (
      <div className="success-msg ml-auto mr-auto">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <div className="title font-weight-bold">Payment Successful</div>
        <h3 className="text-center mb-0 mt-4"><Link className="badge badge-primary" to='/cart'>Ok</Link></h3>
      </div>
    )
  }

  const cart = () => {
    return (<React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-dark">Total Quantity</span>
        <span className="badge bg-primary badge-pill">{totalQuantity}</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0 text-dark">Food Name : {name}</h6>
            <small className="text-dark">Brief description</small>
          </div>
          <span className="text-dark">₹{price}</span>
        </li>
        {/* <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0 text-dark">Second product</h6>
            <small className="text-dark">Brief description</small>
          </div>
          <span className="text-dark">₹800</span>
        </li> */}
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0 text-dark">Discount</h6>
            <small className="text-dark">5% off to each food</small>
          </div>
          <span className="text-dark">{price * 5 / 100}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0 text-dark">Promo code</h6>
            <small>No Promo code applied</small>
          </div>
          <span className="text-success">-₹0</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className='text-dark'>Total (INR)</span>
          <strong className='text-dark'>₹{price - price * 5 / 100}</strong>
        </li>
      </ul>
    </React.Fragment>)
  }


  return (
    <div className="has-img-on-payment-page">

      <div className='bg-dark text-center text-white'>
        <h2 className="section-title pt-2 font-weight-bold">Payment page</h2>
      </div>
      <div className="container d-flex justify-content-center mt-5 ">
        {/* <div className="py-5 text-center mb-5">
            <h1>Stripe Integration - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h1>
          </div> */}

        {isLoading ? <div className='ml-auto mr-auto'><Loader isLoading={isLoading} /></div> : <div className="row s-box">
          {paymentCompleted ? successMessage() : <React.Fragment>
            <div className="col-md-5 order-md-2 mb-4">
              {cart()}
            </div>
            <div className="col-md-7 order-md-1">
              <Elements stripe={stripePromise}>
                <PaymentCheckoutPage amount={price - price * 5 / 100} setPaymentCompleted={setPaymentCompleted} />
              </Elements>
            </div>
          </React.Fragment>}
        </div>}
      </div>


    </div>
  )
}

export default StripePaymentPage
