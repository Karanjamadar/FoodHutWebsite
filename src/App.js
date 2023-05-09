import { lazy } from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import "./assets/vendors/animate/animate.css"
import "./assets/css/foodhut.css"
import "./assets/vendors/themify-icons/css/themify-icons.css"
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Register from './components/Register';
import CartPage from './components/CartPage';
import StripePaymentPage from './components/StripePaymentPage';
import PaymentCheckoutPage from './components/PaymentCheckoutPage';


// import Login from './components/Login';
// import Home from './components/Home';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import AvailableFoods from './components/AvailbalbleFoods';
// import FoodDetails from './components/FoodDetails';
// import Blogs from './components/Blogs';
// import Reviews from './components/Reviews';
// import ContactUs from './components/ContactUs';
// import RegistrationModal from './components/RegistrationModal';
// import Food from './components/Food';
// import Juice from './components/Juice';
// import PrivateLayout from './layout/PrivateLayout';
const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Gallery = lazy(() => import('./components/Gallery'));
const AvailableFoods = lazy(() => import('./components/AvailableFoods'));
const FoodDetails = lazy(() => import('./components/FoodDetails'));
const Blogs = lazy(() => import('./components/Blogs'));
const Reviews = lazy(() => import('./components/Reviews'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const RegistrationModal = lazy(() => import('./components/RegistrationModal'));
const Food = lazy(() => import('./components/Food'));
const Juice = lazy(() => import('./components/Juice'));
const PrivateLayout = lazy(() => import('./layout/PrivateLayout'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* these are the public route */}

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* these are the private Routes */}
        <Route element={<PrivateLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="available" element={<AvailableFoods />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="details/:id" element={<FoodDetails />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="register" element={<RegistrationModal />} />
          <Route path="food" element={<Food />} />
          <Route path="juice" element={<Juice />} />
          <Route path="stripePayment" element={<StripePaymentPage />} />
          <Route path="checkout" element={<PaymentCheckoutPage />} />
        </Route>




      </Route>
    </Routes>


  );
}

export default App;
