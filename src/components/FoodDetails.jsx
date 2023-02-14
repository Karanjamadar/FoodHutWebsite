import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleFood, fetchsingleFood } from '../store/FoodSlice'
// import 'bootstrap/dist/css/bootstrap.min.css';

const FoodDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(fetchSingleFood(id))

  }, [])
  const { food, isloading } = useSelector((state) => state.food)
  return (
    <>
      <div className=" d-flex justify-content-center p-4 row mt-5 pt-5 header">
        {/* {
          isloading ? <div className="spinner-border text-success mx-auto my-auto" style={{ height: "100px", width: "100px"}} role="status">
            <span className="sr-only">Loading...</span>
          </div> : */}
            <div key={food?.id}>
                <div className='gallary-item wow fadeIn border border-white rounded h-100 mb-1 mt-0 bg-body b bg-secondary' >
                  <img src={food?.image} alt="failed to load" className="gallary-img" style={{height:400, marginLeft:30}} />
                  {/* <Link to={`/details/${item.id}`} className="gallary-overlay" >
                    <h4 className="text-white">{item?.name}</h4>
                  </Link> */}
                  <div style={{paddingLeft:100, paddingRight:100,marginLeft:100}}>
                    <h4>{food?.name}</h4>
                    <p className="text-white">ingredients : [ {
                      food?.ingredients?.map((ingredient) => {
                                return (
                          <small>{ingredient},</small>
                        )
                      })
                    }]</p>
                    <p className="text-white">spicy :
                      {
                        food?.spicy ? <small> It is spicy</small> : <small> It is not spicy</small>
                      }
                    </p>
                    <p>
                      {
                        food?.vegetarian ? <small className="text-white"> It is Veg</small> : <small> It is Non-Veg</small>
                      }
                    </p>
                    <h1>Order Now</h1>
                  </div>
                 
                  <h1 className="text-center mb-auto mb-auto"><Link className="badge badge-primary" >${food?.price}</Link></h1>
                </div>
              </div>

        {/* } */}
      </div>
    </>
  )
}

export default FoodDetails
