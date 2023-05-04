import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchGalleryItems, Statuses } from '../store/GallerySlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'

const Gallery = () => {

  const { gallery, isLoading } = useSelector((state) => state.gallery)

  const dispatch = useDispatch()

  useEffect(() => {
    const email = localStorage.getItem('userEmail')
    const payload = {
      "email": "karan@gmail.com"
    }
    dispatch(fetchGalleryItems(payload))
  }, []);
  return (
    <>
      <div id="gallary" className="text-center bg-dark text-white mt-0 mb-0">
        <h2 className="section-title pt-2">OUR MENU</h2>

        <div className="gallary row d-flex justify-content-center header" >
          {
            isLoading ? <div className='has-img-bg1'><Loader isLoading={isLoading} /></div> :
              gallery?.map((item, index) => {
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
      </div>
    </>
  )
}

export default Gallery
