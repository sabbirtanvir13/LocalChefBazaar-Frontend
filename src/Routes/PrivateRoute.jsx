

// import React from 'react';

// import { Navigate, useLocation } from 'react-router';
// import useAuth from '../hooks/useAuth';

// const PrivateRoute = ({children}) => {
//     const {user}=useAuth();

//     const location=useLocation()
//     console.log(location)
   
//       if(!user){
//         return <Navigate state={location.pathname} to='/login'></Navigate>
//     }
//     return children
// };

// export default PrivateRoute;

import { Navigate, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../Pages/Shared/LoadingSpinner'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

export default PrivateRoute