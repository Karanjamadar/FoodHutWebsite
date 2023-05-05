import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import "../assets/vendors/animate/animate.css"
import "../assets/css/foodhut.css"
import "../assets/vendors/themify-icons/css/themify-icons.css"
import Loader from './Loader'
import { deleteFromCart, fetchCartData } from '../store/cartSlice'
import { increment, decrement } from '../store/cartSlice'
import swal from 'sweetalert'
const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const email = localStorage.getItem('userEmail')


  useEffect(() => {
    const payload = {
      email: email,
    }
    dispatch(fetchCartData(payload))
  }, []);

  const handleDecrement = (name) => {
    const payload = {
      email: email,
      name: name
    }
    dispatch(decrement(payload))
      .unwrap()
      .then(response => {
        if (response.success === false) {
          swal({
            title: "Failed",
            text: response.message,
            icon: "error",
          });
        }
      })
  }
  const handleIncrement = (name) => {
    const payload = {
      email: email,
      name: name
    }
    dispatch(increment(payload))
      .unwrap()
      .then(response => {
        if (response.success === false) {
          swal({
            title: "Failed",
            text: response.message,
            icon: "error",
          });
        }
      })
  }
  const handleDelete = (name) => {
    const payload = {
      email: email,
      name: name
    }
    dispatch(deleteFromCart(payload))
      .unwrap()
      .then(response => {
        if (response.success === true) {
          swal({
            title: "Success",
            text: response.message,
            icon: "success",
          });
        } else {
          swal({
            title: "Failed",
            text: response.message,
            icon: "error",
          });
        }
      })
  }

  const { cartData, isLoading } = useSelector((state) => state.cart)
  console.log({ cartData })
  return (
    <>
      <div className="text-center bg-dark text-light mt-0 mb-0">
        <h2 className="section-title pt-2">Your Cart</h2>
        <div className="gallary row d-flex justify-content-center p-3 row header1 ">
          {
            isLoading ? <div className='has-img-bg1'><Loader isLoading={isLoading} /></div> : cartData?.map((item) => {
              return (
                <div className="gallary gallary-item wow fadeIn border border-white border-5  mb-1 bg-body bg-dark m-5 col-sm-6 col-lg-3 ">
                  {/* <div className='gallary gallary-item wow fadeIn border border-white border-5 h-100 mb-1 bg-body bg-dark' > */}
                  <img src={item?.img} alt="failed to load" className="gallary-img" height={400} />
                  <div className="card-body ">
                    <h3 className="pt20 pb20">{item?.name}</h3>
                    <h5 className="text-white ">Ingredients :<br />
                      {
                        item?.ingredients?.map((ingredient) => {
                          return (
                            <small>{ingredient},</small>
                          )
                        })
                      }</h5>
                    <p className="text-white">spicy :
                      {
                        item?.spicy === "true" ? <small> It is spicy</small> : <small> It is not spicy</small>
                      }
                    </p>
                    <p>
                      {
                        item?.vegetarian === "true" ? <small className="text-white"> It is Veg</small> : <small> It is Non-Veg</small>
                      }
                    </p>
                    <h3 className="text-center mb-0 mt-auto">Price : <Link className="badge disabled"  >₹{item?.price}</Link></h3>


                  </div>
                  <h3>Quantity</h3>
                  <div className='d-flex align-items-center justify-content-center'>
                    <h3 className="text-center mr-3"><Link className="badge badge-primary" onClick={() => handleDecrement(item?.name)}>-</Link></h3>
                    <h3>{item?.count}</h3>
                    <h3 className="text-center ml-3"><Link className="badge badge-primary" onClick={() => handleIncrement(item?.name)}>+</Link></h3>

                  </div>
                  <h3 className="text-center mb-0 mt-3"> Total Price : <Link className="badge disabled" >₹{item?.price * item?.count}</Link></h3>
                  {/* </div> */}
                  <h1 className="text-center mt-4"><Link className="badge badge-primary disabled rounded-pill" >Buy Now</Link></h1>
                  <h1 className="text-center"><Link className='badge' onClick={() => handleDelete(item?.name)}>Remove from cart</Link></h1>

                </div>
              )
            })
          }
        </div>
      </div >
    </>
  )
}

export default CartPage
