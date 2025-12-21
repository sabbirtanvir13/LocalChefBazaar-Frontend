import React from "react";

import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";

import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Pages/Shared/LoadingSpinner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CreateMealForm() {
  const { user } = useAuth()
const axiosSecure =useAxiosSecure()


    const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();




    // 🔹 save meal mutation (JWT protected)
  const { mutateAsync, isPending } = useMutation({
    mutationFn: payload => axiosSecure.post("/save-meals", payload),
    onSuccess: () => {
      Swal.fire("Success", "Meal added successfully", "success");
      reset();
    },
    onError: () => {
      Swal.fire("Error", "Unauthorized or server error", "error");
    },
  });



  
  const { data: dbUser, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await axiosSecure.get("/me")
      return res.data
    }
  })

  if (isLoading || isPending) {
    return <LoadingSpinner />;
  }




  const onSubmit = async data => {

    const { foodname, chefname, price, ingredients, image, experience, delivery, deliveryArea} = data;


    console.log(data)
    const imagefile = image[0]

    try {

      const imageURL = await imageUpload(imagefile)
      const MealsData = {
        image: imageURL,
        foodname,
        chefname,
        price: Number(price),
        ingredients,
        deliveryArea,
        experience: Number(experience),
        delivery,
     
       chef: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
                chefId: dbUser?.chefId, 
        }
      }

      await mutateAsync(MealsData)
      reset()

    } catch (err) {
      console.log(err)
    }


  }


  if(isPending) return <LoadingSpinner></LoadingSpinner>

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-4">Create New Meal</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Food Name</label>
            <input
              {...register("foodname", { required: true })}
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter food name"
            />
          </div>

          {errors.foodname && <p className="text-red-500">Food Name is required</p>}



          {/* Chef Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef Name</label>
            <input
              {...register("chefname", { required: true })}
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter chef name"
            />
          </div>

          {errors.chefname && <p className="text-red-500">Chef Name is required</p>}



          <div className=' p-4  w-full flex flex-col md:col-span-2 m-auto rounded-lg grow'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    {...register("image", { required: true })}
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'

                    id='image'
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                    Upload
                  </div>
                </label>
              </div>
            </div>
          </div>
          {errors.image && <p className="text-red-500">Image is required</p>}


          {/* Price */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Price ($)</label>
            <input
              {...register("price", { required: true })}
              type="number"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter price"
            />
          </div>
          {errors.price && <p className="text-red-500">Price is required</p>}


          {/* Rating */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Rating</label>
            <input
              type="number"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Default 0"
              readOnly
            />
          </div>

          {/* Ingredients */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1">Ingredients</label>
            <textarea
              {...register("ingredients", { required: true })}
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Comma separated (e.g. salt, chicken, oil)"
            ></textarea>
          </div>

          {errors.ingredients && <p className="text-red-500">Ingredients is required</p>}


          {/* Estimated Delivery Time */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Estimated Delivery Time</label>
            <input
              {...register("delivery", { required: true })}
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="30 minutes"
            />
          </div>
          {errors.delivery && <p className="text-red-500">Delivery time is required</p>}

          {/* Delivery Area */}
             <div className="flex flex-col">
            <label className="font-semibold mb-1">Delivery Area </label>
            <input
              {...register("deliveryArea", { required: true })}
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder=" Delivery Area"
            />
          </div>
             {errors.price && <p className="text-red-500">Delivery Area is required</p>}
          {/* Chef Experience */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef Experience</label>
            <input
              {...register("experience", { required: true })}
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="e.g. 5 years"
            />
          </div>
          {errors.experience && <p className="text-red-500">Experience is required</p>}

          {/* Chef ID */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef ID</label>
             <input
            readOnly
            value={dbUser?.chefId || ""}
            className="input input-bordered bg-gray-100"
            placeholder="Chef ID"
          />
          </div>

          {/* User Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">User Email</label>
           <input
            readOnly
            value={user?.email || ""}
            className="input input-bordered bg-gray-100"
            placeholder="User Email"
          />
          </div>

 
          <button
            type="submit"
            disabled={isPending}
            className={`px-8 py-3 md:h-[60px] md:mt-[21px] font-semibold rounded-xl shadow 
           ${isPending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            {isPending ? "Adding Meal..." : "Add Meal"}
          </button>



        </form>
      </div>
    </div>
  );
}
