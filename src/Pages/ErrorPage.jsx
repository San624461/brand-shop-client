import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='w-[80%] mx-auto mt-20'>
                <h1 className='text-5xl text-center font-extrabold'> 404 Not Found</h1>
                <h1 className='text-xl font-bold text-center
                 mt-10'>  Oppss Page Not Found</h1>
                <Link to='/'>
                    <button className='btn bg-black block mx-auto text-white mt-5'>Go Back To Home</button></Link>
                    </div>
        </div>
    );
};

export default ErrorPage;