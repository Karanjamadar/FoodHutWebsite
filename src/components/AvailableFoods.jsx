import React, { useEffect } from 'react'
import { fetchFood } from '../store/FoodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../assets/vendors/animate/animate.css"
import "../assets/css/foodhut.css"
import "../assets/vendors/themify-icons/css/themify-icons.css"
import Loader from './Loader'
const AvailableFoods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    const payload = {
      email: email
    }
    dispatch(fetchFood(payload))
  }, []);
  const { foods, isLoading } = useSelector((state) => state.food)
  return (
    <>
      <div className="text-center bg-dark text-light mt-0 mb-0">
        <h2 className="section-title pt-2">Available Foods</h2>
        <div className="gallary row d-flex justify-content-center p-3 row header1 ">
          {
            isLoading ? <div className='has-img-bg1'><Loader isLoading={isLoading} /></div> : foods?.map((item) => {
              const id = item.id;
              return (
                <div className="col-sm-6 col-lg-3 mt-4 " key={item?.id} onClick={() => navigate(`/details/${id}`)}>
                  <div className='gallary gallary-item wow fadeIn border border-white border-5  h-100 mb-1 bg-body bg-dark' >
                    <img src={item?.image} alt="failed to load" className="gallary-img" height={400} />
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
                    </div>
                    <Link to="#" className="gallary-overlay">
                      <p className="gallary-icon">View Details</p>
                    </Link>
                    <h1 className="text-center mb-0 mt-auto"><Link className="badge badge-primary disabled"  >₹{item?.price}</Link></h1>

                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    </>


  )
}

export default AvailableFoods
