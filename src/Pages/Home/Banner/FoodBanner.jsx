// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Food1 from '../../../assets/Food1.png'
// import Container from "../../Shared/Container";
// export default function FoodHeroCircle() {
//     const foods = [
//         {
//             title: (
//                 <>
//                     Home-Cooked <br /> Goodness
//                 </>
//             ),
//             desc: "Discover delicious meals made by local chefs from your neighborhood.",
//             img: Food1,
//         },

//         {
//             title: "Fresh & Healthy",

//             desc: "Enjoy fresh, wholesome meals prepared with love and care.",
//             img: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
//         },
//         {
//             title: (
//                 <>
//                     Taste the Local <br /> Flavors
//                 </>
//             ),
//             desc: "Savor authentic dishes crafted by talented home chefs near you.",
//             img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
//         },

//         {
//             title:(
//                  <>
//                   Chefs’ Special <br /> Picks
//                 </>
//             ) ,

//             desc: "Try our chefs’ favorite meals, full of flavor and passion.",
//             img: "https://png.pngtree.com/png-clipart/20240621/original/pngtree-one-plate-chicken-biryani-png-image_15376393.png",
//         },
//     ];

//     const [active, setActive] = useState(0);

//     return (

//         <Container>
//             <div className=" mt-7  flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-8">
//                 {/* Left Content */}
//                 <div className="max-w-xl space-y-6">
//                     <AnimatePresence mode="wait">
//                         <motion.h1
//                             key={foods[active].title}
//                             initial={{ opacity: 0, y: 40 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -10 }}
//                             className="text-4xl lg:text-5xl font-bold text-purple-600"
//                         >
//                             {foods[active].title}
//                         </motion.h1>
//                     </AnimatePresence>

//                     <AnimatePresence mode="wait">
//                         <motion.p
//                             key={foods[active].desc}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="text-gray-600"
//                         >
//                             {foods[active].desc}
//                         </motion.p>
//                     </AnimatePresence>
//                     <button className="bg-orange-500 mr-3 text-white px-6 py-3 rounded-full">
//                         Order
//                     </button>

//                     <button className="btn text-white px-6 py-3 rounded-full">
//                         Explore Meals
//                     </button>

//                 </div>


//                 <div className="relative w-[350px] h-[350px] mt-6 lg:mt-0">

//                     <AnimatePresence mode="wait">
//                         <motion.img
//                             key={foods[active].img}
//                             src={foods[active].img}
//                             className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         />
//                     </AnimatePresence>


//                     {foods.map((food, i) => {
//                         const angle = (360 / foods.length) * i;
//                         const radius = 160;
//                         const x = 175 + radius * Math.cos((angle * Math.PI) / 180);
//                         const y = 175 + radius * Math.sin((angle * Math.PI) / 180);

//                         return (
//                             <motion.img
//                                 key={i}
//                                 src={food.img}
//                                 onClick={() => setActive(i)}
//                                 whileHover={{ scale: 1.2 }}
//                                 className={`absolute w-16 h-16 rounded-full object-cover cursor-pointer border-2
//             ${active === i ? "border-orange-500" : "border-white"}`}
//                                 style={{
//                                     left: x - 32,
//                                     top: y - 32,
//                                 }}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>

//         </Container>
//     );
// }

import React from 'react';
import chefImage from '../../../assets/Chef.png';
import pizzaBackground from '../../../assets/images__4_-removebg-preview.png';
import avatar1 from '../../../assets/img1.jpeg';
import avatar2 from '../../../assets/images (2).jpeg';
import avatar3 from '../../../assets/images (3).jpeg';
import Container from '../../Shared/Container';

const FoodBanner = () => {
  return (
    <Container>
      <div
        className="flex flex-col-reverse lg:flex-row items-center justify-center text-white min-h-[80vh] p-8 md:p-16 relative overflow-hidden"
      >
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl text-center lg:text-left mb-10 lg:mb-0 z-20">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Your Go-To Spot for <br /> Quick and Tasty Eats!
          </h1>

          <p className="text-gray-400 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="flex justify-center lg:justify-start gap-5 mb-8">
            <button className="px-6 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300">
              Online Ordering
            </button>
            <button className="px-6 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300">
              Reserve Table
            </button>
          </div>

          <div className="flex justify-center lg:justify-start -space-x-2 overflow-hidden mb-8">
            <img src={avatar1} alt="User Avatar 1" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
            <img src={avatar2} alt="User Avatar 2" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
            <img src={avatar3} alt="User Avatar 3" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="flex-1 relative flex justify-center items-center w-full"
          style={{
            backgroundImage: `url(${pizzaBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '500px',
          }}
        >
          {/* Chef image positioned on top */}
          <img
            src={chefImage}
            alt="Smiling Chef"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-[130px] h-[500px] max-w-[90%] object-contain z-10"
          />
        </div>
      </div>
    </Container>
  );
};

export default FoodBanner;
