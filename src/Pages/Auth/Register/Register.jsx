
import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handelRegister = (data) => {
        console.log(data);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                        <form onSubmit={handleSubmit(handelRegister)}>
                            <fieldset className="fieldset">
                                {/* email */}

                                <label className="label">Email</label>
                                <input
                                    {...register('email', { required: true })}
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-red-500">Email is required</p>}

                                {/* name */}
                                <label className="label">Name</label>
                                <input
                                    {...register('name', { required: true, maxLength: 20 })}
                                    type="text"
                                    className="input"
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-red-500">Name is required</p>}

                                {/* profile img */}

                                <label className="label">Profile Photo</label>
                                <input
                                    {...register('photo')}
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                />


                                <label className="label">Your Address</label>
                                <input
                                    {...register('address', { required: true })}
                                    type="text"
                                    className="input"
                                    placeholder="Your Address"
                                />
                                {errors.name && <p className="text-red-500"> Address is required</p>}

                                <label className="label">Password</label>
                                <input
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

                                    })}
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500">Password must be at least 6 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500">
                                        Must contain uppercase, lowercase, number & special character
                                    </p>
                                )}

                                <label className="label">Confirm Password</label>
                                <input
                                    {...register('confirmPassword', { required: true })}
                                    type="password"
                                    className="input"
                                    placeholder="Confirm Password"
                                />

                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <Link
                               
                                className='text-blue-500 underline' to='/login'>Login</Link>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
