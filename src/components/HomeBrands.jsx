import React from 'react';

const HomeBrands = ({ loadedBrands }) => {
    console.log(loadedBrands);
    return (
        <div >
            <h1 className='text-3xl  mt-10 mb-5 font-bold text-center text-[#EDC10F]'> What We Serve </h1>
           
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {
            loadedBrands.map(brand => (
                <div key={brand.brandName}
         className="card bg-base-100 shadow-xl image-full">
                <figure><img src={brand.brandImage} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{brand.brandName}</h2>
                  <p>{brand.oneLineDetail}</p>
                  <div className="card-actions justify-end">
                    <button className="btn border-0 rounded-none text-[#EDC10F] font-bold">View Details</button>
                  </div>
                </div>
              </div>
            ))
           }
          </div>
        </div>
    );
};

export default HomeBrands;