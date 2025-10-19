import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext);
    // console.log(user)
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        // <span className="loading loading-bars loading-xl"></span>;
        return <Loading></Loading> ;
    }

    if(user && user?.email){
         return children;
    }
    return <Navigate  to="/auth/login"></Navigate>;

   
};

export default PrivateRoute;