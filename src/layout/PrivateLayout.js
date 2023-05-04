import Navbar from "../components/shared/Navbar";
import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
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
            <Suspense>
              <div style={{
                paddingTop: '100px', '@media (maxWidth: 979px)': {
                  paddingTop: '0px',
                },
              }}>
                <Outlet />
              </div>
            </Suspense>
          </>
          :
          <Navigate to='/' state={{ from: location }} replace />

      }

    </>

  )
}

export default PrivateLayout
