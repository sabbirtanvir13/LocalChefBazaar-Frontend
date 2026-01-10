import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";


const AddChef = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  


  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setSuccess("");
      setError("");

      await axios.post("http://localhost:3000/addChef", data);

      setSuccess("Chef added successfully ✅");
      reset();
    } catch (err) {
      setError("Failed to add chef ❌",err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Add New Chef
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-5"
      >
        {/* Chef Name */}
        <div>
          <label className="block mb-1 font-medium">Chef Name</label>
          <input
            type="text"
            placeholder="Enter chef name"
            {...register("name", {
              required: "Chef name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            className="w-full px-4 py-2 rounded-lg border"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="w-full px-4 py-2 rounded-lg border"
          >
            <option value="">Select category</option>
            <option value="Traditional Bengali">Traditional Bengali</option>
            <option value="Biryani Specialist">Biryani Specialist</option>
            <option value="Home Cooked Meals">Home Cooked Meals</option>
            <option value="Desserts & Pitha">Desserts & Pitha</option>
            <option value="Healthy Food">Healthy Food</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            {...register("image", {
              required: "Image URL is required",
            })}
            className="w-full px-4 py-2 rounded-lg border"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Messages */}
        {success && (
          <p className="text-green-600 text-center">{success}</p>
        )}
        {error && (
          <p className="text-red-600 text-center">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold"
        >
          {loading ? "Adding..." : "Add Chef"}
        </button>
      </form>
    </div>
  );
};

export default AddChef;
