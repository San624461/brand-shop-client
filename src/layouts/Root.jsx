import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('bg-black');
        } else {
            document.documentElement.classList.remove('bg-black');
        }
    }, [isDarkMode]);

    return (
        <div className='w-[90%] mx-auto font-ibm'>
            <div className={isDarkMode ? 'bg-black' : 'bg-white'}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>

                <button
                    onClick={toggleDarkMode}
                    className="bg-[#EDC10F] hover:bg-black text-white font-bold py-2 px-4 rounded"
                >
                    Enable Dark Mode
                </button>
            </div>
        </div>
    );
};

export default Root;
