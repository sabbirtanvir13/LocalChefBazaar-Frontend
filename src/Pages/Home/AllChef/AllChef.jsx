// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const AllChef = () => {

//   const { data: chefs = [], isLoading, error } = useQuery({
//     queryKey: ["chefs"],
//     queryFn: async () => {
//       const res = await axios.get(`${import.meta.env.VITE_API_URL}/allChefs`);
//       return res.data;
//     },
//   });

//   if (isLoading) return <p className="text-center py-10">Loading chefs...</p>;
//   if (error)
//     return (
//       <p className="text-center py-10 text-red-500">
//         Failed to load chefs: {error.message}
//       </p>
//     );

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <h2 className="text-3xl font-bold mb-6 text-center">All Chefs</h2>

//       {chefs.length === 0 && (
//         <p className="text-center text-gray-500">No chefs found.</p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {chefs.map((chef) => (
//           <div
//             key={chef._id}
//             className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
//           >
//             <img
//               src={chef.image}
//               alt={chef.name}
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold">{chef.name}</h3>
//             <p className="text-gray-500">{chef.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllChef;



import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router"; 
const AllChef = () => {
  const navigate = useNavigate(); 

  const { data: chefs = [], isLoading } = useQuery({
    queryKey: ["chefs"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/allChefs`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading chefs...</p>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">All Chefs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{chef.name || "No Name"}</h3>
            <p className="text-gray-500">{chef.category || "No Category"}</p>

            <button
              onClick={() => navigate(`/chef/${chef._id}`)}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
