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
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$5</a></h1>
              <h4 className="pt20 pb20">Reiciendis Laborum </h4>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog2} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$12</a></h1>
              <h4 className="pt20 pb20">Adipisci Totam</h4>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-transparent border my-3 my-md-0">
            <img src={images.blog3} alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
            <div className="card-body bg-secondary">
              <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8</a></h1>
              <h4 className="pt20 pb20">Dicta Deserunt</h4>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Food
