// import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { imageUpload } from "../../../src/utils/index.js"; 
// import useRole from "../../hooks/useRole.jsx";

// const Profile = () => {
//   const { user, updateUserProfile } = useAuth();
//   const [loading, setLoading] = useState(false);

//     const [role]=useRole()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: { name: user?.displayName || "" },
//   });

//   const handleProfileUpdate = async (data) => {
//     setLoading(true);
//     try {
//       let photoURL = user?.photoURL;

//       if (data.photo?.[0]) {
//         photoURL = await imageUpload(data.photo[0]); 
//       }

//       await updateUserProfile({ displayName: data.name, photoURL });
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen  flex items-center justify-center bg-base-200 p-4">
//       <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
//         <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>

//         <div className="flex flex-col items-center mb-6">
//           <img
//             className="w-24 h-24 rounded-full object-cover mb-2 border"
//             src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
//             alt="Profile"
//           />
//               <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
//             {role}
//           </p>
//           <p className="text-lg font-medium">{user?.displayName || "No Name"}</p>
//           <p className="text-gray-500">{user?.email}</p>
//            <p className="text-xs text-gray-400">UID: {user?.uid}</p>
//         </div>

//         <form onSubmit={handleSubmit(handleProfileUpdate)} className="space-y-4">
//           <div>
//             <label className="label">Update Name</label>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               className="input input-bordered w-full"
//             />
//             {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="label">Update Profile Photo</label>
//             <input
//               type="file"
//               {...register("photo")}
//               className="file-input file-input-bordered w-full"
//             />
//           </div>

//           <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </form>




//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../src/utils";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [role] = useRole();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(null); // chef | admin | null
   const axiosSecure= useAxiosSecure()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: user?.displayName || "" },
  });

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      let photoURL = user?.photoURL;

      if (data.photo?.[0]) {
        photoURL = await imageUpload(data.photo[0]);
      }

      await updateUserProfile({ displayName: data.name, photoURL });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };



  const handleConfirmRequest = async () => {
  try {
    const endpoint =
      openModal === "chef" ? "/become-chef" : "/become-admin";

    const res = await axiosSecure.post(endpoint);

    if (res.data?.insertedId) {
      alert("Request sent successfully!");
      setOpenModal(null);
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send request");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6 relative">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>

        {/* User Info */}
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-24 h-24 rounded-full object-cover border mb-2"
            src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
            alt="Profile"
          />

          <span className="px-4 py-1 text-xs rounded-full bg-lime-500 text-white mb-2 capitalize">
            {role}
          </span>

          <p className="text-lg font-medium">
            {user?.displayName || "No Name"}
          </p>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <p className="text-xs text-gray-400">UID: {user?.uid}</p>
        </div>

        {/* Update Profile */}
        <form onSubmit={handleSubmit(handleProfileUpdate)} className="space-y-4">
          <div>
            <label className="label">Update Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="label">Update Profile Photo</label>
            <input
              type="file"
              {...register("photo")}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral w-full"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>

        {/* ROLE BASED ACTION BUTTONS */}
        {role !== "admin" && (
          <div className="mt-6 border-t pt-4 space-y-3">

            {/* USER → CHEF */}
            {role === "user" && (
              <button
                onClick={() => setOpenModal("chef")}
                className="btn btn-outline btn-success w-full"
              >
                Be a Chef
              </button>
            )}

            {/* USER / CHEF → ADMIN */}
            {(role === "user" || role === "chef") && (
              <button
                onClick={() => setOpenModal("admin")}
                className="btn btn-outline btn-warning w-full"
              >
                Be an Admin
              </button>
            )}
          </div>
        )}
      </div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-base-100 rounded-xl shadow-xl w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-2 text-center">
              Become a {openModal === "chef" ? "Chef" : "Admin"}
            </h3>

            <p className="text-sm text-gray-500 text-center mb-4">
              Are you sure you want to send a request to become a{" "}
              <span className="font-semibold capitalize">{openModal}</span>?
            </p>

            <div className=" gap-3 space-y-4">

              <button
                className="btn btn-primary w-full"
                onClick={handleConfirmRequest}
              >
                Confirm Request
              </button>
              <button
                className="btn btn-outline w-full"
                onClick={() => setOpenModal(null)}
              >
                Cancel
              </button>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
