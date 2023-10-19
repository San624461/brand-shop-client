import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvide";
import Swal from 'sweetalert2'

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const reloadWebsite = () => {

    window.location.reload();
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    setError('');
    setIsSubmitting(true);

    if (/^(?!.*[A-Z])(?!.*[^A-Za-z0-9]).{6,}$/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password should be more than 6 characters, should contain a capital letter and a special character',
        icon: 'error',
        confirmButtonText: 'Cool'
      })


      setIsSubmitting(false);
    } else {
      try {
        const res = await createUser(email, password, name, photo);
        if (res && res.user) {
          Swal.fire('Success!', 'User registered successfully.', 'success');
          reloadWebsite()
          

        } else {

          console.error('User data not available');
        }

        navigate(location?.state ? location.state : '/');
      } catch (err) {
        setError(err.message);
        Swal.fire('Error!', err.message, 'error');
      } finally {
        setIsSubmitting(false);
      }

    }
  }
  return (
    <div className="mt-5">

      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-6">
          <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
          <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-6">
          <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
          <input type="text" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>

        <div className="mb-6">
          <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo URL</label>
          <input type="text" name="photo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>


        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="text-white bg-[#EDC10F]
  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        <p className='text-lg mt-3'>Have an account ? <Link to='/login' className='font-semibold text-blue-400'>Log In here</Link></p>
      </form>

    </div>
  );
};

export default Register;