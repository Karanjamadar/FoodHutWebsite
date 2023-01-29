import React from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
  return (
    <>
    <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-secondary" style={{marginTop:105 }}>
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-white text-center">
                <h2 className="section-title "> What Others Say About Us</h2>
                <p className="section-sub-title">
                    We are very greatfull to say that we have most valueable reviews.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="section-primary t-bordered mt-2">
    <div className="container">
        <div className="row testimonial-three testimonial-three--col-three">
            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
                    </div>
                    <div className="testimonial-content">
                        <p>
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title text-dark" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link" >Media Wiki</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                    </div>

                    <div className="testimonial-content ">
                        <p>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        </p>
                    </div>

                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title text-dark" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link" >Media Wiki</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    </div>
                    <div className="testimonial-content">
                        <p>
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link"  >Media Wiki</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar4.png"/>
                    </div>

                    <div className="testimonial-content">
                        <p>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        </p>
                    </div>

                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title text-dark" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link" >Media Wiki</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                    </div>
                    <div className="testimonial-content">
                        <p>
                            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        </p>
                    </div>
                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title text-dark" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link">Media Wiki</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 testimonial-three-col">
                <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                        <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                    </div>

                    <div className="testimonial-content">
                        <p>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                        </p>
                    </div>

                    <div className="testimonial-meta">
                        <strong className="testimonial-name text-dark" itemprop="name">Anna Vandana</strong>
                        <span className="testimonial-job-title text-dark" itemprop="jobTitle">CEO</span> – <Link className="testimonial-link" href="#" >Media Wiki</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Reviews
