// import React from "react";
// import Container from "../../Shared/Container";

// const TopChef = () => {
//   const chefs = [
//     {
//       name: "Chef Anna",
//       img: "https://i.ibb.co/BV9yMbQ3/download-10.png",
//       specialty: "Italian Cuisine",
//     },
//     {
//       name: "Chef Brian",
//       img: "https://i.ibb.co/YBfCg9Gg/download-12.png",
//       specialty: "Bakery & Desserts",
//     },
//     {
//       name: "Chef Clara",
//       img: "https://i.ibb.co/mFbMp38V/download-11.png",
//       specialty: "Asian Fusion",
//     },
//   ];

//   return (
//     <Container>
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h3 className="text-4xl font-bold text-center mb-12 text-orange-500">
//           Meet Our Top Chefs
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {chefs.map((chef, index) => (
//             <div
//               key={index}
//               className="relative bg-[#ece0d1] rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               <img
//                 src={chef.img}
//                 alt={chef.name}
//                 className="w-full h-72 md:h-80 lg:h-96 object-contain p-6"
//               />
//               <div className="p-6 text-center">
//                 <h4 className="text-2xl font-semibold mb-2">{chef.name}</h4>
//                 <p className="text-gray-600">{chef.specialty}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default TopChef;
import { MapPin, Star } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Mohammad AliSous ",
    role: "Chef",
    img: "https://media.licdn.com/dms/image/v2/D5603AQHUW3NT0O7uXA/profile-displayphoto-scale_400_400/B56ZrYC.qvKAAk-/0/1764561258516?e=2147483647&v=beta&t=tkAUeSGfcGp-CArrWvpZrd4WK9bgwvSqi6c9GSTkAn4",
  },
  {
    id: 2,
    name: "Jaheda Begum",
    role: "Master Chef",
    img: "https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/posts/37143/chef.jpg",
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Master Chef",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ov01hrtybX2YwABg7VRotuz4VrMbYww6BA&s",
  },
  {
    id: 4,
    name: "Arfatul Islam",
    role: " Chef",
    img: "https://img.freepik.com/free-photo/young-handsome-cook-chef-uniform-doing-tasty-gesture-isolated-white-space_141793-45157.jpg?semt=ais_hybrid&w=740&q=80",
  },
];
const TopChef = () => {
  return (
       <section className=" py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
        
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Meet Our Best Chef
          </h2>
          <div className="w-14 h-[3px] bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-[22px] px-5 pt-6 pb-8 text-center shadow-sm"
            >
              {/* Image box */}
              <div className="w-full h-[230px] bg-[#EDEDED] rounded-[18px] overflow-hidden flex items-center justify-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="mt-5 font-semibold text-[15px]">
                {member.name}
              </h3>
              <p className="text-[13px] text-gray-500 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopChef;
