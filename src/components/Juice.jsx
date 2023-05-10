import React from 'react'
import images from '../const/images'

const Juice = () => {
  return (

    <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog4} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive " />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹50</a></h1>
              <h4 className="pt20 pb20">Lime Juice</h4>
              <p className="text-white">From breakfasts to parties, you can use them to add vibrant, zesty taste to your summer.
                All these great flavors can be achieved from the comfort of your home, too. Extracting lime juice requires little and sometimes no equipment so you can start your juicing regimen right away. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog5} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹120</a></h1>
              <h4 className="pt20 pb20">Strawberry-apple mixed juice</h4>
              <p className="text-white">Strawberries and apples are a great couple in this pretty pink juice. lorem epsum is the best way to add text Be sure to drink it as soon as possible after it's made for the most nutritious bang. Adding chia seeds helps replace the fiber that is lost in the juicing process. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog6} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">₹80</a></h1>
              <h4 className="pt20 pb20">Refreshing Orange juice</h4>
              <p className="text-white">Refreshing orange juice can be enjoyed in a variety of ways, such as Bourbon Orange Juice, The Southern Belle and Jamaican Sunrise.1 These drinks combine the sweetness and boldness of orange juice to create an enjoyable drink that is perfect for any occasion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Juice
