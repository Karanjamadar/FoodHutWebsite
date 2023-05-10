import React from 'react'
import images from '../const/images'

const Food = () => {
  return (

    <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog1} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹50</a></h1>
              <h4 className="pt20 pb20">Burgers and French Fries</h4>
              <p className="text-white">First, prepare all of your veggie garnishes. Shred the lettuce, slice a tomato and onion, select five or six nice pickles, whatever you got, and place it all onto a plate. Now form your burger patty and get it on the grill. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog2} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹120</a></h1>
              <h4 className="pt20 pb20">Berries with natural tastes</h4>
              <p className="text-white">Raspberries, blackberries and strawberries are the best low-carb fruits, with net carb counts of around 5 or 6 grams per 100 grams.0 There are 25 different types of berry that can be eaten </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog3} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹80</a></h1>
              <h4 className="pt20 pb20">Veg/Non-veg Burger</h4>
              <p className="text-white">Our product range includes a wide range of Aloo Tikki Burger, Paneer Cheese Burst Burger, Kiddy Chicken Burger, Tandoori Chicken Burger, Chicken Cheese Burst Burger and Ultimate DB Grilled Chicken Burger</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Food
