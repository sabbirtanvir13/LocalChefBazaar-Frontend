// import React from 'react';
// import { AuthContext } from './AuthContext';
// import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase/Firebase.init';
// const AuthProvider = ({children}) => {

//     const registerUser=(email, password)=>{
//     return createUserWithEmailAndPassword(auth, email, password)
//     }


//     const SignINUser=(email,password)=>{
//         return signInWithEmailAndPassword(auth, email, password)
//     }








//  const authinfo={
//  registerUser,
//  SignINUser,
//  }

//     return (
//        <AuthContext value={authinfo}> 
//          {children}
//        </AuthContext>
//     );
// };

// export default AuthProvider;


import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    signInWithGoogle,
    logout,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
