import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';


const Root = () => {
    return (
        <div className='w-[90%] mx-auto font-ibm'>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;