import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // Here you can decode the credential (JWT) and save user info or send to your backend.
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  return (
    <div>
      <GoogleLogin 
        onSuccess={handleLoginSuccess} 
        onError={handleLoginError} 
      />
    </div>
  );
};

export default GoogleLoginButton;
