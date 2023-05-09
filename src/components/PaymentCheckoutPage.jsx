import React, { useState } from 'react';
import {
  useStripe, useElements,
  CardNumberElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js'
import { useDispatch } from 'react-redux';
import { payment } from '../store/paymentSlice';
import swal from 'sweetalert';

const PaymentCheckoutPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const stripePaymentMethodHandler = async (data, cb) => {
    const { amount, result } = data;
    if (result.error) {
      // show error in payment form
      cb(result);
    } else {
      const paymentResponse = await stripePayment({
        payment_method_id: result.paymentMethod.id,
        name: result.paymentMethod.billing_details.name,
        email: result.paymentMethod.billing_details.email,
        amount: amount
      });
      console.log(paymentResponse);
      cb(paymentResponse);
    }
  }

  const stripePayment = async data => {

    const email = localStorage.getItem('userEmail');
    // const payload = {
    //   email: email,
    // }
    dispatch(payment(JSON.stringify(data)))
      .unwrap()
      .then(async (res) => {
        // console.log(res)
        if (res.error) {
          // Show error from server on payment form
          swal({
            title: "Failed",
            text: res.error,
            icon: "error",
          });
          console.log(res.error);
        } else if (res.requires_action) {
          // Use Stripe.js to handle the required card action
          const { error: errorAction, paymentIntent } =
            await stripe.handleCardAction(res.payment_intent_client_secret);
          if (errorAction) {
            // Show error from Stripe.js in payment formclg
            swal({
              title: "Failed",
              text: errorAction,
              icon: "error",
            });
            console.log(errorAction)
          } else {
            stripePayment({ payment_intent_id: paymentIntent.id })
          }
        } else {
          // Show success message
          console.log(res)
          props.setPaymentCompleted(res.success === true ? true : false);
          // swal({
          //   title: "Success",
          //   text: res.message,
          //   icon: "success",
          // });
        }
      })
  }

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        lineHeight: "27px",
        color: "white",
        fontSize: "1.1rem",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "black",
      },
    },
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const paymentMethodObj = {
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name,
        email
      },
    };
    const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj);

    stripePaymentMethodHandler({
      result: paymentMethodResult,
      amount: props.amount
    }, handleResponse);
  };
  const handleResponse = response => {
    setLoading(false);
    if (response.error) {
      setErrorMsg(typeof response.error === 'string' ? response.error : response.error.message);
      return;
    }
    props.setPaymentCompleted(response.success ? true : false);
  };

  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-dark">Pay with card</span>
      </h4>
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name" className='text-dark'>Name on card</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            // style={{ backgroundColor: 'white' }}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-email" className='text-dark'>Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-number" className='text-dark'>Card Number</label>
            <CardNumberElement
              id="cc-number"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiry" className='text-dark'>Expiration Date</label>
            <CardExpiryElement
              id="expiry"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvc" className='text-dark'>CVC</label>
            <CardCvcElement
              id="cvc"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `PAY ₹${props.amount}`}
        </button>
        {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
      </form>
    </React.Fragment>
  )
}

export default PaymentCheckoutPage
