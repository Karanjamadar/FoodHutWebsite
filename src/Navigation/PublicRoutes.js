import { Routes, Route } from "react-router-dom"

import Login from "../components/Login";
import Register from "../components/Register";

import React from 'react'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  )

}

export default PublicRoutes
