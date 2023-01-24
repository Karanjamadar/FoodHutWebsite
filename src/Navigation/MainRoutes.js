import { Routes, Route } from "react-router-dom"


import React from 'react'
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/privateRoute" element={<PrivateRoutes />} />
      <Route path="/publicRoute" element={<PublicRoutes />} />
    </Routes>
  )

}

export default MainRoutes
