
// import React from 'react';

// import { useForm, Watch } from 'react-hook-form';
// import { Link } from 'react-router';
// import useAuth from '../../../hooks/useAuth';

// const Register = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm();
     
//      const { registerUser,}=useAuth();

//     const handelRegister = (data) => {
//         console.log(data);
//         registerUser(data.email, data.password)
//         .then(result=>{
//              console.log(result.user)
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <div className="card-body">
//                         <h1 className="text-5xl font-bold">Register now!</h1>

//                         <form onSubmit={handleSubmit(handelRegister)}>
//                             <fieldset className="fieldset">
//                                 {/* email */}

//                                 <label className="label">Email</label>
//                                 <input
//                                     {...register('email', { required: true })}
//                                     type="email"
//                                     className="input"
//                                     placeholder="Email"
//                                 />
//                                 {errors.email && <p className="text-red-500">Email is required</p>}

//                                 {/* name */}
//                                 <label className="label">Name</label>
//                                 <input
//                                     {...register('name', { required: true, maxLength: 20 })}
//                                     type="text"
//                                     className="input"
//                                     placeholder="Your Name"
//                                 />
//                                 {errors.name && <p className="text-red-500">Name is required</p>}

//                                 {/* profile img */}

//                                 <label className="label">Profile Photo</label>
//                                 <input
//                                     {...register('photo')}
//                                     type="file"
//                                     className="file-input file-input-bordered w-full"
//                                 />


//                                 <label className="label">Your Address</label>
//                                 <input
//                                     {...register('address', { required: true })}
//                                     type="text"
//                                     className="input"
//                                     placeholder="Your Address"
//                                 />
//                                 {errors.name && <p className="text-red-500"> Address is required</p>}

//                                 <label className="label">Password</label>
//                                 <input
//                                     {...register('password', {
//                                         required: true,
//                                         minLength: 6,
//                                         pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//                                     })}
//                                     type="password"
//                                     className="input"
//                                     placeholder="Password"
//                                 />

//                                 {errors.password?.type === "required" && (
//                                     <p className="text-red-500">Password is required</p>
//                                 )}
//                                 {errors.password?.type === "minLength" && (
//                                     <p className="text-red-500">Password must be at least 6 characters</p>
//                                 )}
//                                 {errors.password?.type === "pattern" && (
//                                     <p className="text-red-500">
//                                         Must contain uppercase, lowercase, number & special character
//                                     </p>
//                                 )}

//                                 {/* <label className="label">Confirm Password</label>
//                                 <input
//                                     {...register('confirmPassword', {
//                                         validate: (value) => {
//                                             value === watch('password') || "Your passwords do not match"
//                                         }
//                                     })}
//                                     type="password"
//                                     className="input"
//                                     placeholder="Confirm Password"
//                                 /> */}

//                                 <label className="label">Confirm Password</label>
//                                 <input
//                                     {...register('confirmPassword', {
//                                         required: "Please confirm your password",
//                                         validate: (value) =>
//                                             value === watch('password') || "Your passwords do not match"
//                                     })}
//                                     type="password"
//                                     className="input"
//                                     placeholder="Confirm Password"
//                                 />


//                                 {errors.confirmPassword && (
//                                     <p className="text-red-500 text-sm">
//                                         {errors.confirmPassword.message}
//                                     </p>
//                                 )}


//                                 <button className="btn btn-neutral mt-4">Register</button>
//                             </fieldset>
//                             <Link

//                                 className='text-blue-500 underline' to='/login'>Login</Link>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';

import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin';
import { imageUpload } from '../../../utils';

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
    
 
    await registerUser(data.email, data.password);

  
    const imageURL = await imageUpload(profileImage);

   
    const profile = {
      displayName: data.name,
      photoURL: imageURL,
    };

    await updateUserProfile(profile);

  
    navigate(location.state?.from || "/");
  } catch (error) {
    console.log(error);
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
