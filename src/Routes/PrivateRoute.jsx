import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvide';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext)

const location = useLocation()
console.log(location);

     if(loading){
     return   <span className="loading loading-spinner text-error"></span>
     }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children;
};

export default PrivateRoute;