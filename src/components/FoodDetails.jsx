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
  // console.log({ food })
  return (
    <>
      <div className=" d-flex justify-content-center p-4 row mt-5 pt-5 header">
        {
          isloading ? <div className="spinner-border text-success mx-auto my-auto" style={{ height: "100px", width: "100px"}} role="status">
            <span className="sr-only">Loading...</span>
          </div> :
            <div tabindex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{food.name}</h5>
                  </div>
                  <div className="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default FoodDetails
