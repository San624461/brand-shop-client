import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const [addedProducts, setAddedProducts] = useState([]);

    const handleAddToCart = () => {
        const addedProduct = {
            name: product.name,
            photo: product.photo,
            price: product.price,
            
        };

        const isProductInCart = addedProducts.some(
            (item) => item.name === addedProduct.name
        );

        if (isProductInCart) {
            Swal.fire({
                title: 'Error!',
                text: 'Product is already in your cart',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        } else {
          
            setAddedProducts([...addedProducts, addedProduct]);

     
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(addedProduct),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
                    }
                });
        }
    };

    return (
        <div className='mt-10 mb-10 w-full md:w-full lg:w-[50%] mx-auto'>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700 w-full">
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={product.photo}
                    alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {product.description}
                    </p>
                    <p>Price: {product.price}</p>
                    <button
                        onClick={handleAddToCart}
                        className='rounded-none btn text-white bg-[#EDC10F] mt-2'
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
