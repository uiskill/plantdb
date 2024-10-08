import React from 'react'
import CarouselComponent from '../componenets/CarouselComponent'
import TopFeatureComponent from '../componenets/TopFeatureComponent'
import CounterComponent from '../componenets/CounterComponent'
import QuoteComponent from '../componenets/QuoteComponent'
import ProjectsComponent from '../componenets/ProjectsComponent'
import TestimonialCarousel from '../componenets/TestimonialCarousel'
import { Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
  
            <CarouselComponent />
            <TopFeatureComponent />

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-end">
                        <div class="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img class="img-fluid rounded" data-wow-delay="0.1s" src="img/about.jpg" />
                        </div>
                        <div class="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 class="display-1 text-primary mb-0">25</h1>
                            <p class="text-primary mb-4">Year of Experience</p>
                            <h1 class="display-5 mb-4">ABOUT PLANT DATABASE</h1>
                            <p class="mb-4">we believe in nurturing not just minds but also the greenery around us. Welcome to our Plants Information System, your go-to destination for all things botanical. Whether you’re a seasoned gardener, a curious student, or simply someone who enjoys the beauty of nature, you’ll find a wealth of information and resources here to enrich your botanical journey.”</p>
                            <Link class="btn btn-primary py-3 px-4" to="/about">Explore More</Link>
                        </div>
                        <div class="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-5">
                                <div class="col-12 col-sm-6 col-lg-12">
                                    <div class="border-start ps-4">
                                        <i class="fa fa-award fa-3x text-primary mb-3"></i>
                                        <h4 class="mb-3">Award Winning</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-lg-12">
                                    <div class="border-start ps-4">
                                        <i class="fa fa-users fa-3x text-primary mb-3"></i>
                                        <h4 class="mb-3">Dedicated Team</h4>
                                        <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




          

            <ProjectsComponent />
            <CounterComponent />
            <TestimonialCarousel />
            <QuoteComponent />
        
        </div>
    )
}

export default Home
