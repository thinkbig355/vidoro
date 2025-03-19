import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // Optionally store token in localStorage or context
    localStorage.setItem('authToken', credentialResponse.credential);
    navigate('/dashboard');
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  return (
    <GoogleLogin 
      onSuccess={handleLoginSuccess} 
      onError={handleLoginError} 
    />
  );
};

export default GoogleLoginButton;