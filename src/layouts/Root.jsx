import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';


const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const darkModeClass = isDarkMode ? 'bg-black' : 'bg-white';
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
            <div className={`${darkModeClass}`}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>


                <button
                    onClick={toggleDarkMode}
                    className={`bg-stone-400 btn hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${darkModeClass}`}
                >
                    Enable Dark Mode
                </button>
            </div>
        </div>
    );
};

export default Root;