import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleFood } from '../store/FoodSlice'
import Loader from './Loader'
import { addToCart } from '../store/cartSlice'
import swal from 'sweetalert'
// import 'bootstrap/dist/css/bootstrap.min.css';

const FoodDetails = () => {
  const navigate = useNavigate();
  const { food, isLoading } = useSelector((state) => state.food)
  const [count, setCount] = useState(1)



  const { id } = useParams()
  const dispatch = useDispatch()
  const intId = parseInt(id)


  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    const payload = {
      id: intId,
      email: email,
    }
    dispatch(fetchSingleFood(payload))
  }, [])

  const addToCartFoods = () => {
    const payload = {
      email: localStorage.getItem('userEmail'),
      name: food?.name,
      description: food?.description,
      description: food?.description,
      ingredients: food?.ingredients,
      spicy: food?.spicy,
      vegetarian: food?.vegetarian,
      price: food?.price,
      img: food?.image
    }
    dispatch(addToCart(payload))
      .unwrap()
      .then(response => {
        if (response.success === true) {
          swal({
            title: "Success",
            text: response.message,
            icon: "success",
          })
        }
      })
  }

  function handleQuantityChange(newQuantity) {
    if (newQuantity < 1) {
      swal({
        title: "Failed",
        text: "Quanity should not be zero.",
        icon: "error",
      })
    } else {
      setCount(newQuantity)
    }
  }

  const params = new URLSearchParams()
  params.append('amount', food?.price * count);
  params.append('foodName', food?.name);
  params.append('qty', count);



  return (
    <>
      <div className=" d-flex justify-content-center row pt-5 header1 rounded-9">
        {
          isLoading ? <div className='has-img-bg1'><Loader isLoading={isLoading} /></div> :
            <div key={food?.id}>
              <div className='gallary-item wow fadeIn border border-white rounded mb-5 mt-0 bg-body d-flex  bg-dark' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '750px', borderRadius: 30 }} >
                <img src={food?.image} alt="failed to load" className="gallary-img" style={{ height: '400px', width: '600px', marginTop: '50px', borderRadius: 30 }} />
                <div style={{ marginTop: '20px', display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'column', width: '600px' }}>
                  <h1>{food?.name}</h1>
                  <h3 className="text-white">Ingredients :<br />  {
                    food?.ingredients?.map((ingredient) => {
                      return (
                        <small>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}, </small>
                      )
                    })
                  }</h3>
                  <h4 className="text-white">
                    {
                      food?.spicy === 'true' ? <h3> This {food?.name} is spicy</h3> : <h3> This {food?.name} is not spicy</h3>
                    }
                  </h4>
                  <p>
                    {
                      food?.vegetarian === 'true' ? <h3 className="text-white"> It is Veg</h3> : <h3> It is Non-Veg</h3>
                    }
                  </p>
                  <h3 className="text-center ">Price : <Link className="badge" >₹{food?.price}</Link></h3>
                </div>
                <h3>Quantity</h3>
                <div className='d-flex align-items-center justify-content-center'>
                  <h3 className="text-center mr-3"><Link className="badge badge-primary" onClick={() => handleQuantityChange(count - 1)}>-</Link></h3>
                  <h3>{count}</h3>
                  <h3 className="text-center ml-3"><Link className="badge badge-primary" onClick={() => handleQuantityChange(count + 1)}>+</Link></h3>

                </div>
                <h3 className="text-center mb-0 mt-3"> Total Price : <Link className="badge " >₹{food?.price * count}</Link></h3>
                <h1 className="text-center "><Link className="badge badge-primary rounded-pill" to={`/stripePayment?${params.toString()}`}>Order Now</Link></h1>
                {/* <h3>or</h3> */}
                <h1 className="text-center"><Link className='badge' onClick={addToCartFoods}>Add to cart</Link></h1>

              </div>
            </div>
        }
      </div >
    </>
  )
}

export default FoodDetails
