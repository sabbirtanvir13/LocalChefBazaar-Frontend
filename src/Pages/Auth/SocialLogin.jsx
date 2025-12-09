import React from 'react';

import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate(location.state?.from || '/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
