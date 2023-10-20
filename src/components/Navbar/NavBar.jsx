import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvide';
import Swal from 'sweetalert2';
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  // console.log(createUser)
  const handleSignOut = () => {
    logOut()
      .then(res => {
        Swal.fire(
          'Good job!',
          'Logged Out Successfully!',
          'success'
        )
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed To Logged Out',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }

  const navLinks = <>

    <li className='mr-4'>
      <NavLink to='/'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >Home</NavLink>
    </li >
    <li className='mr-4'>
      <NavLink to='/addproduct'
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >Add Product</NavLink>
    </li>
    <li className='mr-4'>
      <NavLink to='/mycart'

        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>My Cart</NavLink>
    </li>
    <li className=''>
      <NavLink to='/login'

        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>Log In</NavLink>
    </li>
  

  </>

  return (
    <>
      <div id='sidebar' className="navbar bg-[#EDC10F] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52  ">
              {navLinks}
            </ul>
          </div>
          <div>
            <a href="#" className="flex items-center">
              <img src={logo} className="h-8 mr-3 " alt="" />
              <span className="self-center  text-xl md:text-2xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white w-[20%]">Gulp Groove</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 text-xl font-medium">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.displayName && (
            <p className="text-sm">{user.displayName}</p>
          )}
          {user?.email && (
            <div className="avatar ml-3">
              <div className="w-8 rounded-full">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </div>
          )}
          {
            user ? <button
              onClick={handleSignOut} className="btn w-[20%] bg-white text-[#EDC10F] ml-3 pt-3 pb-2 ">
              Sign Out
            </button>
              :


              <button className="btn bg-white  text-[#EDC10F]">
                <Link to='/login'>Log In</Link>
              </button>
          }


        </div>






      </div>


    </>
  );
};

export default NavBar;