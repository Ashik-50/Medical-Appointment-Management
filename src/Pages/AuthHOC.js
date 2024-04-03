// AuthHOC.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthHOC = (WrappedComponent) => {
  const AuthWrapper = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    const checkAuthentication = () => {
      // Check if user is authenticated, e.g., by checking local storage or other authentication state
      const username = localStorage.getItem('username');
      if (username) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    const login = (username) => {
      // Simulate login by storing username in local storage
      localStorage.setItem('username', username);
      setAuthenticated(true);
      navigate('/landing');
    };

    const logout = () => {
      // Simulate logout by removing user information from local storage
      localStorage.removeItem('username');
      setAuthenticated(false);
      navigate('/login');
    };

    return (
      <WrappedComponent
        authenticated={authenticated}
        checkAuthentication={checkAuthentication}
        login={login}
        logout={logout}
      />
    );
  };

  return AuthWrapper;
};

export default AuthHOC;
