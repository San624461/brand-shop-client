

import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import HomeBrands from '../components/HomeBrands';
import Insta from '../components/Insta';
import HomeReview from '../components/HomeReview';
import { useEffect, useState } from 'react';

const Home = () => {
    
    const loadedBrands = useLoaderData()
    
     
    // console.log(loadedBrands);
    return (
        <div >
         
          
            <Banner></Banner>
            <HomeBrands
            loadedBrands={loadedBrands}
            ></HomeBrands>
            <Insta></Insta>
            <HomeReview></HomeReview>


           

            
        </div>
    );
};

export default Home;