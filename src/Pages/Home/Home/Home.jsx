import React from 'react';
import FoodBanner from '../Banner/FoodBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TopChef from '../TopChef/TopChef';
import Offer from '../Offer/Offer';
import Satisfaction from '../Satisfaction/Satisfaction';
import LatestMeals from '../../latest-meals/LatestMeals';
import HighlightSection from '../../HighlightSection/HighlightSection';


const Home = () => {
    return (
        <div>
         <FoodBanner></FoodBanner>
         <LatestMeals></LatestMeals>
         <HighlightSection></HighlightSection>
         <Offer></Offer>
        <WhyChooseUs></WhyChooseUs>
        <Satisfaction></Satisfaction>
          <TopChef></TopChef>
        </div>
    );
};

export default Home;