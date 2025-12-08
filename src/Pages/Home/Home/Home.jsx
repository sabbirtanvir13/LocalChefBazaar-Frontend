import React from 'react';
import FoodBanner from '../Banner/FoodBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TopChef from '../TopChef/TopChef';


const Home = () => {
    return (
        <div>
         <FoodBanner></FoodBanner>
      <WhyChooseUs></WhyChooseUs>
      <TopChef></TopChef>
        </div>
    );
};

export default Home;