import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchGalleryItems, Statuses } from '../store/GallerySlice'
import { useDispatch, useSelector } from 'react-redux'

const Gallery = () => {

  const { gallery, isLoading } = useSelector((state) => state.gallery)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGalleryItems())
  }, []);
  console.log(gallery)
  return (
    <>
      <div id="gallary" className="text-center bg-dark text-light has-height-md middle-items wow fadeIn mt-5">
        <h2 className="section-title">OUR MENU</h2>
      </div>
      <div className="gallary row d-flex justify-content-center" >
        {
          isLoading ? <div className="spinner-border text-success mx-auto my-auto" style={{ height: "100px", width: "100px" }} role="status">
            <span className="sr-only">Loading...</span>
          </div> : gallery?.map((item, index) => {
            const base64String = btoa(String.fromCharCode(...new Uint8Array(item?.img?.data?.data)))
            return (
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn" key={index}>
                <img src={`data:image/jpg;base64,${base64String}`} alt="hello" className="gallary-img" />
                <Link to="#" className="gallary-overlay">
                  <i className="gallary-icon ti-plus"></i>
                </Link>
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default Gallery
