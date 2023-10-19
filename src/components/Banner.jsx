import React from 'react';


const Banner = () => {
    return (
        <div>
        <div className="hero h-[650px]" style={{backgroundImage: 'url(https://images.pexels.com/photos/4109136/pexels-photo-4109136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Gulp Groove</h1>
      <p className="mb-5 font-medium text-base">Indulge in a World of Flavors: Welcome to Gulp Groove, your destination for an extraordinary culinary journey. Discover an array of delectable treats, artisanal beverages, and gourmet delights carefully curated to tantalize your taste buds.</p>
      <button className="btn border-0 rounded-none text-[#EDC10F] font-bold">Explore More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;