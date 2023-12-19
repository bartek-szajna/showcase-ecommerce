/* eslint-disable react/jsx-props-no-spreading */
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('authToken');
  if(!user){
    return <Navigate to="/login" replace={true} />
  }
  return children
};

export default PrivateRoute;
