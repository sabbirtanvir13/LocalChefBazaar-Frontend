// import React from 'react';
// import Container from '../../Shared/Container';
// import { FaBowlFood } from 'react-icons/fa6';


// const WhyChooseUs = () => {
//     return (
//         <Container>
//             <div>
//                 <h3 className="text-3xl text-yellow-500 text-center mb-10">Why Choose Us</h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-[200px]">


//                     <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
//                         <img src="https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-a-complete-try-of-fast-food-icon-image-png-image_12645728.png" alt="" className="w-14 h-14 mb-4" />
//                         <h5 className="text-xl font-semibold mb-2">Fresh & Homemade</h5>
//                         <p className="text-gray-600 text-sm">
//                             Every meal is cooked with love by local chefs.
//                         </p>
//                     </div>


//                     <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
//                         <img src="https://cdn-icons-png.freepik.com/256/5457/5457799.png?semt=ais_white_label" alt="" className="w-14 h-14 mb-4" />
//                         <h5 className="text-xl font-semibold mb-2">Fast & Reliable <br />Delivery</h5>
//                         <p className="text-gray-600 text-sm">
//                             Enjoy hot meals delivered quickly to your doorstep.
//                         </p>
//                     </div>





//                     <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
//                         <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png" alt="" className="w-14 h-14 mb-4" />
//                         <h5 className="text-xl font-semibold mb-2">Customer Satisfaction</h5>
//                         <p className="text-gray-600 text-sm">
//                             Real reviews and ratings ensure quality you can trust.
//                         </p>
//                     </div>

//                 </div>

//             </div>
//         </Container>
//     );
// };

// export default WhyChooseUs;


import React from "react";
import Container from "../../Shared/Container";
import { FaBowlFood, FaTruckFast, FaStar } from "react-icons/fa6";

const features = [
  {
    icon: <FaBowlFood size={36} className="text-white" />,
    title: "Fresh & Homemade",
    description: "Every meal is cooked with love by local chefs, using only the finest ingredients.",
    gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    icon: <FaTruckFast size={36} className="text-white" />,
    title: "Fast & Reliable Delivery",
    description: "Enjoy hot meals delivered quickly and safely right to your doorstep.",
    gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
  {
    icon: <FaStar size={36} className="text-white" />,
    title: "Customer Satisfaction",
    description: "Real reviews and ratings ensure quality and happiness with every bite.",
    gradient: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24  relative overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full filter blur-3xl -z-10"></div>

      <Container>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative z-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-3 transition-all duration-500"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full mb-5 ${feature.gradient} shadow-xl`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>

              {/* subtle shine animation */}
              <span className="absolute -top-5 -right-5 w-4 h-4 bg-white rounded-full opacity-70 animate-pulse"></span>
              <span className="absolute bottom-4 left-4 w-3 h-3 bg-white rounded-full opacity-60 animate-pulse delay-200"></span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
