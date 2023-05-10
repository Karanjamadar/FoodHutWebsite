import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchReviews } from '../store/reviewSlice'

const Reviews = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        const payload = {
            email
        }
        dispatch(fetchReviews(payload))
        // eslint-disable-next-line
    }, [])
    const { review } = useSelector(state => state.review)
    return (
        <>
            <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-dark p-3">
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
            <section className="section-primary t-bordered header">
                <div className="overlay">
                    <div className="row testimonial-three testimonial-three--col-three">
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content">
                                    <p>
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> <Link className="testimonial-link" >Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content ">
                                    <p>
                                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> <Link className="testimonial-link" >Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content">
                                    <p>
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title" itemProp="jobTitle">CEO</span> <Link className="testimonial-link"  >Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content">
                                    <p>
                                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> – <Link className="testimonial-link" >Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content">
                                    <p>
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> – <Link className="testimonial-link">Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 testimonial-three-col ml-5">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt='failed to load' />
                                </div>
                                <div className="testimonial-content">
                                    <p>
                                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                    </p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                    <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> – <Link className="testimonial-link" href="#" >Media Wiki</Link>
                                </div>
                            </div>
                        </div>
                        {
                            review.map((item) => {
                                return (
                                    <div className="col-md-4 testimonial-three-col">
                                        <div className="testimonial-inner">
                                            <div className="testimonial-image" itemProp="image">
                                                <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt='failed to load' />
                                            </div>
                                            <div className="testimonial-content">
                                                <p>
                                                    {item.body}
                                                </p>
                                            </div>
                                            <div className="testimonial-meta">
                                                <strong className="testimonial-name text-dark" itemProp="name">Anna Vandana</strong>
                                                <span className="testimonial-job-title text-dark" itemProp="jobTitle">CEO</span> – <Link className="testimonial-link" href="#" >Media Wiki</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews
