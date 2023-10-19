import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`http://localhost:5000/products/brand/${brandName}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [brandName]);

  if (products.length === 0) {
    return <div>No products found for the specified brand.</div>;
  }

  return (



    <div>



      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/G98gCmk/pizza-329523-1280.jpg" alt="pizza-329523-1280" border="0" className='w-full' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/RYCD7DV/french-fries-1846083-1280.jpg" alt="french-fries-1846083-1280" border="0" className='w-full' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/3Wwmqqx/hamburger-1414423-1280.jpg" alt="hamburger-1414423-1280" border="0" className='w-full' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
      <h2 className='text-3xl mt-10 mb-10 font-bold  text-center text-[#EDC10F]'>Products for {brandName}</h2>
      <div className='grid grid-cols-1
      md:grid-cols-1 lg:grid-cols-2 gap-4 '>


        {
          products.map((product) => (


            <div key={product._id} className="card lg:w-[90%]
            bg-base-100 shadow-xl">
             <div> <figure className="px-10 pt-10">
                <img src={product.photo} alt="Shoes" className="rounded-xl" />
              </figure></div>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-[#EDC10F]">{product.brand}</h2>
                <p className='text-xl'>{product.description}</p>
                <p className='text-gray-400'>{product.type}</p>
                <p className='text-gray-400'> Price : {product.price}</p>

                <p className='text-gray-400'>Rating : {product.rating}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>



          ))
        }
      </div>
    </div>
  );
};

export default BrandProducts;

