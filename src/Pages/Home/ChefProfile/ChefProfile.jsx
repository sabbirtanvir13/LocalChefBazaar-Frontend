// import { useParams } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { MapPin, Star } from "lucide-react";

// const ChefProfile = () => {
//   const { id } = useParams();

//   const { data: chef, isLoading } = useQuery({
//     queryKey: ["chefProfile", id],
//     queryFn: async () => {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/allChefs/${id}`
//       );
//       return res.data;
//     },
//   });

//   if (isLoading) {
//     return <p className="text-center py-20">Loading profile...</p>;
//   }

//   return (
//     <section className="py-20">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* Top Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <img
//             src={chef.image}
//             alt={chef.name}
//             className="w-full h-[400px] object-cover rounded-2xl shadow"
//           />

//           <div>
//             <h2 className="text-3xl font-bold">{chef.name}</h2>
//             <p className="text-gray-500 mt-2">{chef.category}</p>

//             <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
//               <MapPin size={16} /> Bangladesh
//             </div>

//             <div className="flex items-center gap-1 mt-3">
//               <Star className="text-yellow-400" size={18} />
//               <span className="text-sm font-medium">4.8 Rating</span>
//             </div>

//             <p className="mt-6 text-gray-600 leading-relaxed">
//               {chef.name} is a professional Bangladeshi chef specializing in
//               authentic {chef.category}. With years of experience, delivering
//               delicious and hygienic homemade meals.
//             </p>
//           </div>
//         </div>

//         {/* Extra Info */}
//         <div className="grid sm:grid-cols-3 gap-6 mt-16">
//           <div className="bg-white rounded-xl p-6 text-center shadow">
//             <h4 className="text-2xl font-bold text-orange-500">120+</h4>
//             <p className="text-sm text-gray-500 mt-1">Orders Completed</p>
//           </div>

//           <div className="bg-white rounded-xl p-6 text-center shadow">
//             <h4 className="text-2xl font-bold text-orange-500">8+</h4>
//             <p className="text-sm text-gray-500 mt-1">Years Experience</p>
//           </div>

//           <div className="bg-white rounded-xl p-6 text-center shadow">
//             <h4 className="text-2xl font-bold text-orange-500">95%</h4>
//             <p className="text-sm text-gray-500 mt-1">Positive Reviews</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChefProfile;


import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MapPin, Star } from "lucide-react";

const ChefProfile = () => {
  const { id } = useParams();

  const { data: chef, isLoading } = useQuery({
    queryKey: ["chefProfile", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/allChefs/${id}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center py-20 text-gray-600">Loading profile...</p>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-[400px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Top Chef
            </span>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">{chef.name}</h2>
            <p className="text-lg text-orange-500 mt-2 font-semibold">{chef.category}</p>

            <div className="flex items-center gap-3 mt-4 text-gray-600 text-sm">
              <MapPin size={16} /> Bangladesh
            </div>

            <div className="flex items-center gap-3 mt-3">
              <Star className="text-yellow-400" size={20} />
              <span className="text-gray-800 font-medium text-sm">4.8 / 5 Rating</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Top Rated
              </span>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {chef.name} is a professional Bangladeshi chef specializing in
              authentic {chef.category}. With years of experience, delivering
              delicious and hygienic homemade meals.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Orders Completed", value: "120+" },
            { title: "Years Experience", value: "8+" },
            { title: "Positive Reviews", value: "95%" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h4 className="text-2xl font-bold text-orange-600">{item.value}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Chef</h3>
          <p className="text-gray-700 leading-relaxed">
            {chef.name} has been cooking traditional {chef.category} dishes for years,
            bringing authentic taste and hygiene to every meal. Known for creativity
            and passion in the kitchen, they have earned a reputation for excellence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ChefProfile;
