import { Routes, Route } from "react-router-dom"

import React from 'react'
import About from "../components/About"
import Gallery from "../components/Gallery"
import BookGallary from "../components/BookGallary"
import Blogs from "../components/Blogs"
import Reviews from "../components/Reviews"
import ContactUs from "../components/ContactUs"
import Home from "../components/Home"
import Food from "../components/Food"
import Juice from "../components/Juice"
import RegistrationModal from "../components/RegistrationModal"
import LoginModal from "../components/LoginModal"
import AvailableFoods from "../components/AvailbalbleFoods"
import FoodDetails from "../components/FoodDetails"
import Layout from "../layout/PrivateLayout"

const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/available" element={<AvailableFoods />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/details/:id" element={<FoodDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register" element={<RegistrationModal />} />
        <Route path="/food" element={<Food />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>
    </Layout>
  )
}

export default PrivateRoutes
