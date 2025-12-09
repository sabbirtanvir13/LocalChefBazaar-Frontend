import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../src/utils/index.js"; // তোমার utility ফাইল অনুযায়ী path ঠিক করো

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);

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
        photoURL = await imageUpload(data.photo[0]); // utility function ব্যবহার
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            className="w-24 h-24 rounded-full object-cover mb-2 border"
            src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
            alt="Profile"
          />
          <p className="text-lg font-medium">{user?.displayName || "No Name"}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <form onSubmit={handleSubmit(handleProfileUpdate)} className="space-y-4">
          <div>
            <label className="label">Update Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="label">Update Profile Photo</label>
            <input
              type="file"
              {...register("photo")}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
