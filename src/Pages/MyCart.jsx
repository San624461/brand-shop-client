import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2'
const MyCart = () => {
    const addedProduct = useLoaderData();
    const [products, setProduct] = useState(addedProduct)
    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                   
                    const remaining = products.filter(product => product._id !== _id);
                    
                    setProduct(remaining)
                    Swal.fire(
                        'Good job!',
                        'Deleted Successfully!',
                        'success'
                    )
                }
            })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  mt-10 mb-10'>
            {
                products.map(product => (
                    <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <div className='w-[60%] mx-auto'>
                            <figure><img src={product.photo} alt="" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-[#EDC10F]">{product.name}</h2>
                            <p className='text-xl text-gray-400'>Price : {product.price}</p>
                            <div className="card-actions">
                                <button
                                    onClick={() => handleDelete(product._id)} className="btn 
                                rounded-none text-white bg-[#EDC10F] mt-2">Delete <FiDelete className='text-black'></FiDelete></button>
                                <button className="btn rounded-none text-white bg-[#EDC10F] mt-2">Update <GrUpdate ></GrUpdate> </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyCart;