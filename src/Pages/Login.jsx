import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvide';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);


  const [error, setError] = useState('');
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      Swal.fire(
        'Good job!',
        'Logged In Successfully!',
        'success'
      )
      navigate(location?.state ? location.state : '/')
    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Failed To Login',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleLogin();
      Swal.fire(
        'Good job!',
        'Logged In Successfully!',
        'success'
      )
      navigate(location?.state ? location.state : '/')
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed To Login',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return (
    <div>

      <form onSubmit={handleLogIn}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white p-3 font-bold bg-[#EDC10F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </form>


      <button className='btn text-white bg-[#EDC10F] border-none mb-4 mt-3' onClick={handleGoogleSignIn}> Google Login<FaGoogle></FaGoogle></button>
      <p className='text-lg mt-3'>Do not have an account <Link to='/register' className='font-semibold text-blue-400'>Sign Up here</Link></p>


    </div>
  );
};

export default Login;