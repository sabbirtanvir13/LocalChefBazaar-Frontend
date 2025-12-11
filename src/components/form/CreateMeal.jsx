import React from "react";

export default function CreateMealForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-4">Create New Meal</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Food Name</label>
            <input
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter food name"
            />
          </div>

          {/* Chef Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef Name</label>
            <input
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter chef name"
            />
          </div>

          {/* Food Image */}
          {/* <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1">Food Image (Upload)</label>
            <input
              type="file"
              className="border rounded-xl p-3 bg-white"
            />
          </div> */}

             <div className=' p-4  w-full flex flex-col md:col-span-2 m-auto rounded-lg grow'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
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


          {/* Price */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Price ($)</label>
            <input
              type="number"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Enter price"
            />
          </div>

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
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Comma separated (e.g. salt, chicken, oil)"
            ></textarea>
          </div>

          {/* Estimated Delivery Time */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Estimated Delivery Time</label>
            <input
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="30 minutes"
            />
          </div>

          {/* Chef Experience */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef Experience</label>
            <input
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="e.g. 5 years"
            />
          </div>

          {/* Chef ID */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Chef ID</label>
            <input
              type="text"
              className="border rounded-xl p-3 focus:outline-none focus:ring-2"
              placeholder="Auto-generated"
              readOnly
            />
          </div>

          {/* User Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">User Email</label>
            <input
              type="email"
              className="border rounded-xl p-3 bg-gray-100"
              placeholder="Auto-filled"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700"
            >
              Add Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
