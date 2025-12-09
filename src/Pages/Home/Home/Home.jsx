import React from 'react';
import FoodBanner from '../Banner/FoodBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TopChef from '../TopChef/TopChef';
import Offer from '../Offer/Offer';


const Home = () => {
    return (
        <div>
         <FoodBanner></FoodBanner>
         <Offer></Offer>
      <WhyChooseUs></WhyChooseUs>
      <TopChef></TopChef>
        </div>
    );
};

export default Home;