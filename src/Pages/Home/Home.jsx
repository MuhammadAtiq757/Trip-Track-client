

import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import AboutUs from '../AboutUs/AboutUs';
import PopularPlace from '../PopularPlace/PopularPlace';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <Category></Category>
          <AboutUs></AboutUs>
          <PopularPlace></PopularPlace>
        </div>
    );
};

export default Home;