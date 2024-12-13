import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRote = ({ children }) => {
  

  return isOnboarded ? <>{children}</>: <Navigate to="/" />;
};

export default OnBoarded;
