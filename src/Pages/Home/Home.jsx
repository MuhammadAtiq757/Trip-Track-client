

import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import AboutUs from '../AboutUs/AboutUs';
import PopularPlace from '../PopularPlace/PopularPlace';
import Services from '../Services/Services';
import TourGallary from '../TourGallary/TourGallary';
import Packages from '../Packages/Packages';
import Testimonial from '../Testimonial/Testimonial';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <Category></Category>
          <AboutUs></AboutUs>
          <PopularPlace></PopularPlace>
          <Services></Services>
          <TourGallary></TourGallary>
          <Packages></Packages>
          <Testimonial></Testimonial>
          <Brands></Brands>
        </div>
    );
};

export default Home;