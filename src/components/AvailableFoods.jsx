import React, { useEffect } from 'react'
import images from '../const/images'
import { fetchFood } from '../store/FoodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../assets/vendors/animate/animate.css"
import "../assets/css/foodhut.css"
import "../assets/vendors/themify-icons/css/themify-icons.css"
const AvailableFoods = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFood())
  }, []);
  const { foods, isLoading } = useSelector((state) => state.food)
  return (
    <>
      <div id="gallary" className="text-center bg-danger text-light mt-4">
        <h2 className="section-title">Available Foods</h2>
      </div>
      <div className="gallary row d-flex justify-content-center p-4 row bg-dark" style={{ backgroundImage: "343a40" }}>
        {
          isLoading ? <div className="spinner-border text-success mx-auto my-auto" style={{ height: "100px", width: "100px" }} role="status">
            <span className="sr-only">Loading...</span>
          </div> : foods?.map((item) => {
            return (
              <div className="col-sm-6 col-lg-3 mt-4" key={item?.id}>
                <div className='gallary-item wow fadeIn border border-white rounded h-100 mb-1 mt-0 bg-body b bg-secondary' >
                  <img src={item?.image} alt="failed to load" className="gallary-img" height={300} />
                  {/* <Link to={`/details/${item.id}`} className="gallary-overlay" >
                    <h4 className="text-white">{item?.name}</h4>
                  </Link> */}
                  <div className="card-body">
                    <h4 className="pt20 pb20">{item?.name}</h4>
                    <p className="text-white">ingredients : [ {
                      item?.ingredients?.map((ingredient) => {
                        return (
                          <small>{ingredient},</small>
                        )
                      })
                    }]</p>
                    <p className="text-white">spicy :
                      {
                        item?.spicy ? <small> It is spicy</small> : <small> It is not spicy</small>
                      }
                    </p>
                    <p>
                      {
                        item?.vegetarian ? <small className="text-white"> It is Veg</small> : <small> It is Non-Veg</small>
                      }
                    </p>
                  </div>
                  <h1 className="text-center mb-auto mb-auto"><Link className="badge badge-primary">${item?.price}</Link></h1>
                </div>
              </div>

            )
          })
        }
      </div>
    </>


  )
}

export default AvailableFoods
