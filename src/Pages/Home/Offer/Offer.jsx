// import React from 'react';

// // --- Image Links (Placeholders) ---
// const sandwichImage = 'https://img.freepik.com/premium-photo/bargar-fast-food-image-ai-generated_812649-412.jpg';

// const Offer = () => {
//   return (
//     <div className="flex mt-[100px] text-white min-h-[300px] items-center relative overflow-hidden">
     
//       <div className="relative w-1/2 flex items-center justify-center">
        
   
//         <div className="absolute bg-[#FFF7E8] rounded-full w-[400px] h-[400px] md:w-[400px] md:h-[400px]"></div>

 
//         <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden z-10">
//           <img 
//             src={sandwichImage} 
//             alt="Two large sub sandwiches" 
//             className="w-full h-full object-cover rounded-full" 
//           />
//         </div>

//         <div className="absolute md:ml-[320px] md:mt-[25px] top-0 left-0 transform -translate-x-1/4 -translate-y-1/4
//                         bg-yellow-400 text-black font-extrabold text-sm md:text-lg 
//                         w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center 
//                         shadow-lg rotate-[-15deg] z-20">
//           <span className="flex flex-col items-center leading-none">
//             <span className="text-xl md:text-2xl">30%</span>
//             <span className="text-sm md:text-base">OFF</span>
//           </span>
//         </div>
//       </div>
      

//       <div className="w-1/2 pl-8 pr-16 py-8">
//         <h2 className="text-3xl text-black md:text-4xl font-extrabold mb-4">
//           <span className="text-yellow-500">Hot Offer</span> of the Week
//         </h2>
//         <h3 className="text-2xl text-black md:text-3xl font-bold mb-8">
//           Grab it before it's gone!
//         </h3>
        
//         <p className="text-black text-sm">
//           A clean, well-crafted design lets the flavors speak 
//           for themselves. Let our stunning food photography 
//           and irresistible new menu do the talking.
//         </p>
//       </div>


     
//     </div>
//   );
// };

// export default Offer;

import React from "react";
import Container from "../../Shared/Container";

const sandwichImage =
  "https://img.freepik.com/premium-photo/bargar-fast-food-image-ai-generated_812649-412.jpg";

const Offer = () => {
  return (
    <Container>
      <div className="container mx-auto py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Image Left */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative w-80 md:w-[450px] rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            src={sandwichImage}
            alt="Delicious Sandwich"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Animated 30% OFF Badge */}
          <div className="absolute top-4 left-4 bg-orange-400 text-white font-extrabold px-4 py-2 rounded-lg shadow-lg transform -rotate-12 animate-bounce">
            30% OFF
          </div>
        </div>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold text-base-content mb-4">
            <span className="text-orange-500">Hot Offer</span> This Week
          </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
          Grab it before it's gone!
        </h3>
        <p className="text-gray-600 md:text-lg">
          Taste the chef’s special creation made with fresh ingredients and rich flavors.
          Don’t miss out on this week’s limited-time offer!
        </p>
      </div>
    </div>
    </Container>
  );
};

export default Offer;
