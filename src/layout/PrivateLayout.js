import Navbar from "../components/shared/Navbar";
import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Suspense } from "react";

const PrivateLayout = ({ children }) => {
  // const { isLoggedIn } = useSelector(state => state.auth)
  const isLoggedIn = localStorage.getItem('loggedIn')
  const location = useLocation()
  return (
    <>
      {
        isLoggedIn ?
          <>
            <Navbar />
            <Suspense fallback={<div class="spinner-border text-success" style={{marginTop:150 , marginLeft:"650px",marginRight:'auto'}} role="status">
  <span class="sr-only" >Loading...</span>
</div>}>
            <Outlet />
            </Suspense>
          </>
          :
          <Navigate to='/' state={{ from: location }} replace />

      }

    </>

  )
}

export default PrivateLayout
