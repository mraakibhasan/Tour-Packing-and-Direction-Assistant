import React from 'react';
import { Navigate } from 'react-router-dom';

const OnBoarded = ({ children }) => {
  const isOnboarded = localStorage.getItem("is_onboarded");

  return isOnboarded ? <>{children}</>: <Navigate to="/" />;
};

export default OnBoarded;
