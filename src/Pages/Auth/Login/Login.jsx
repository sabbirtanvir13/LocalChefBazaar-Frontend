import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {
       const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm();
    
 const handelLogin=(data)=>{
    console.log(data)
 }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                           <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit(handelLogin)}>

                       
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input    {...register('email', { required: true })} type="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input    {...register('password', { required: true })} type="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                         </form>
                        <Link

                            className='text-blue-500 underline' to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;