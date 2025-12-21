

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';

import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin';
import { imageUpload, saveUpdateUser } from '../../../utils';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();


const handelRegistration = async (data) => {
  try {
    
    const profileImage = data.photo[0];

    
    const imageURL = await imageUpload(profileImage);

    //  register user
    const result = await registerUser(data.email, data.password);

    //  update firebase profile
    await updateUserProfile({
      displayName: data.name,
      photoURL: imageURL,
    });

    //  save user to DB
    await saveUpdateUser({
      name: data.name,
      email: data.email,
      image: imageURL,
      uid: result.user.uid,
      // role: "user",
    });

    // redirect
    navigate(location.state?.from || "/");

  } catch (error) {
    console.log(" Registration Error:", error);
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">

        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-center mb-4">Join LocalChefBazar</p>

        <form onSubmit={handleSubmit(handelRegistration)}>
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Full Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}

            {/* Photo */}
            <label className="label">Profile Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.photo && <p className="text-red-500">Photo is required</p>}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
            {errors.password?.type === "minLength" && <p className="text-red-500">Minimum 6 characters</p>}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">Must include upper, lower, number & special character</p>
            )}

            {/* Confirm Password */}
            <label className="label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match"
              })}
              className="input"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <button className="btn btn-neutral mt-4 w-full">
              Register
            </button>
          </fieldset>
        </form>

        <p className="text-center mt-3">
          Already have an account?
          <Link className="text-blue-500 underline ml-1" to="/login">
            Login
          </Link>
        </p>

        <div className="mt-4">
          <SocialLogin />
        </div>

      </div>
    </div>
  );
};

export default Register;
