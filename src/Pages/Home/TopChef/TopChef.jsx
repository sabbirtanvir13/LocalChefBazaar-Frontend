
// import { MapPin, Star } from "lucide-react";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Mohammad AliSous ",
//     role: "Chef",
//     img: "https://media.licdn.com/dms/image/v2/D5603AQHUW3NT0O7uXA/profile-displayphoto-scale_400_400/B56ZrYC.qvKAAk-/0/1764561258516?e=2147483647&v=beta&t=tkAUeSGfcGp-CArrWvpZrd4WK9bgwvSqi6c9GSTkAn4",
//   },
//   {
//     id: 2,
//     name: "Jaheda Begum",
//     role: "Master Chef",
//     img: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/37143/chef.jpg",
//   },
//   {
//     id: 3,
//     name: "Mohammad Ali",
//     role: "Master Chef",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ov01hrtybX2YwABg7VRotuz4VrMbYww6BA&s",
//   },
//   {
//     id: 4,
//     name: "Arfatul Islam",
//     role: " Chef",
//     img: "https://img.freepik.com/free-photo/young-handsome-cook-chef-uniform-doing-tasty-gesture-isolated-white-space_141793-45157.jpg?semt=ais_hybrid&w=740&q=80",
//   },
// ];
// const TopChef = () => {
//   return (
//        <section className=" py-24">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
        
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             Meet Our Best Chef
//           </h2>
//           <div className="w-14 h-[3px] bg-red-500 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className="bg-white rounded-[22px] px-5 pt-6 pb-8 text-center shadow-sm"
//             >
//               {/* Image box */}
//               <div className="w-full h-[230px] bg-[#EDEDED] rounded-[18px] overflow-hidden flex items-center justify-center">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="h-full object-cover"
//                 />
//               </div>

//               {/* Text */}
//               <h3 className="mt-5 font-semibold text-[15px]">
//                 {member.name}
//               </h3>
//               <p className="text-[13px] text-gray-500 mt-1">
//                 {member.role}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TopChef;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

const TopChef = () => {
  const navigate = useNavigate();

  // Fetch chefs
  const { data: chefs = [], isLoading, isError } = useQuery({
    queryKey: ["chefs"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/allChefs`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center py-20">Loading chefs...</p>;
  if (isError) return <p className="text-center py-20">Failed to load chefs</p>;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Meet Our Best Chefs
          </h2>
          <div className="w-14 h-[3px] bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.slice(0, 4).map((chef) => (
            <div
              key={chef._id}
              className="bg-white rounded-[22px] px-5 pt-6 pb-8 text-center shadow-sm hover:shadow-sm  hover:-translate-y-1"
            >
              {/* Circular Image with hover zoom */}
              <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden border-4 border-orange-400 transform transition-all duration-300 hover:scale-105">
                <img
                  src={chef.image || "https://via.placeholder.com/150"}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="mt-5 font-semibold text-[15px]">{chef.name}</h3>
              <p className="text-[13px] text-gray-500 mt-1">{chef.category || "Chef"}</p>

              {/* View Profile Button */}
              <button
                onClick={() => navigate(`/chef/${chef._id}`)}
                className="mt-4 w-full py-2 bg-orange-400 hover:bg-orange-600 text-white rounded-full cursor-pointer font-semibold transition-all duration-300 hover:scale-105"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopChef;
