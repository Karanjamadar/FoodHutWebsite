import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleFood } from '../store/FoodSlice'
import Loader from './Loader'
import { addToCart } from '../store/cartSlice'
import swal from 'sweetalert'
// import 'bootstrap/dist/css/bootstrap.min.css';

const FoodDetails = () => {
  const { food, isLoading } = useSelector((state) => state.food)

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
          });
        }
      })
  }
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
                      food?.spicy === 'true' ? <small> This {food?.name} is spicy</small> : <small> This {food?.name} is not spicy</small>
                    }
                  </h4>
                  <p>
                    {
                      food?.vegetarian === 'true' ? <small className="text-white"> It is Veg</small> : <small> It is Non-Veg</small>
                    }
                  </p>
                  <h1 className="text-center "><Link className="" >₹{food?.price}</Link></h1>
                </div>
                <h1 className="text-center "><Link className="badge badge-primary rounded-pill" >Order Now</Link></h1>
                <h3>or</h3>
                <h3 className="text-center"><Link className="badge badge-primary rounded-right" onClick={addToCartFoods} >Add To Cart</Link></h3>
              </div>
            </div>
        }
      </div >
    </>
  )
}

export default FoodDetails
