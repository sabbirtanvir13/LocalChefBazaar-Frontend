

import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin';
import { saveUpdateUser } from '../../../utils';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signInUser } = useAuth()
  const location=useLocation();
  const navigate=useNavigate();

  // const handleLogin = (data) => {
  //   console.log(data)
  //   signInUser(data.email, data.password)
    
  //   .then(result => {
  //     console.log(result.user)
  //     navigate(location?.state|| '/')
  //   })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  const handleLogin = async (data) => {
    try {
      //  firebase login
      const result = await signInUser(data.email, data.password);
      const user = result.user;

      // 2save / update user in DB (same as register/google)
      await saveUpdateUser({
        name: user.displayName || '',
        email: user.email,
        image: user.photoURL || '',
      });

      
      navigate(location?.state || '/');

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card  w-full mx-auto max-w-sm shrink-0 shadow-2xl">

       <h3 className="text-3xl text-center">Welcome Back</h3>
       <p className=" text-center">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">


          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
          {
            errors.email?.type === 'required' &&
            <p className='text-red-500'>
              Email is required
            </p>
          }

          <label className="label">Password</label>
          <input type="password"  {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />

          {
            errors.password?.type === 'minLength' &&
            <p className='text-red-500'>
              Paswsword must be 6 characters or longer
            </p>
          }


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to LocalChef Bazar
          
          <Link 
           state={location.state}
          className='text-blue-500 underline' to='/register'>Register</Link>
          
          </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;