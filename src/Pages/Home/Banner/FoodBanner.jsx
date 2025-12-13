

// import React from 'react';
// import chefImage from '../../../assets/Chef.png';
// import pizzaBackground from '../../../assets/images__4_-removebg-preview.png';
// import avatar1 from '../../../assets/img1.jpeg';
// import avatar2 from '../../../assets/images (2).jpeg';
// import avatar3 from '../../../assets/images (3).jpeg';
// import Container from '../../Shared/Container';

// const FoodBanner = () => {
//   return (
//     <Container>
//       <div
//         className="flex flex-col-reverse lg:flex-row items-center justify-center text-white min-h-[80vh] p-8 md:p-16 relative overflow-hidden"
//       >
//         {/* Left Content Section */}
//         <div className="flex-1 max-w-xl text-center lg:text-left mb-10 lg:mb-0 z-20">
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
//             Your Go-To Spot for <br /> Quick and Tasty Eats!
//           </h1>

//           <p className="text-gray-400 mb-8">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout.
//           </p>

//           <div className="flex justify-center lg:justify-start gap-5 mb-8">
//             <button className="px-6 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300">
//               Online Ordering
//             </button>
//             <button className="px-6 py-3 font-semibold bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300">
//               Reserve Table
//             </button>
//           </div>

//           <div className="flex justify-center lg:justify-start -space-x-2 overflow-hidden mb-8">
//             <img src={avatar1} alt="User Avatar 1" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
//             <img src={avatar2} alt="User Avatar 2" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
//             <img src={avatar3} alt="User Avatar 3" className="inline-block h-12 w-12 rounded-full ring-2 ring-black bg-gray-500 object-cover" />
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div
//           className="flex-1 relative flex justify-center items-center w-full"
//           style={{
//             backgroundImage: `url(${pizzaBackground})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             minHeight: '500px',
//           }}
//         >
//           {/* Chef image positioned on top */}
//           <img
//             src={chefImage}
//             alt="Smiling Chef"
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-[130px] h-[500px] max-w-[90%] object-contain z-10"
//           />
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default FoodBanner;


import React from "react";

export default function FoodBanner() {
  return (
    <section className="bg-[#fff7f0] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Yummy <br />
            tasty <span className="inline-flex items-center gap-2 text-orange-500">🍔 burger</span> <br />
            in the town
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Have A Bite On The Best Yummy Burger In The Town Within An Hour Without Any Worry Of Payment
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow">
              Order Now
            </button>
            <button className="flex items-center gap-2 border border-orange-300 px-6 py-3 rounded-full text-orange-500 font-semibold">
              ▶ Watch Cooking
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Background Circle */}
          <div className="absolute w-[420px] h-[420px] bg-[#1a1a3c] rounded-full right-0"></div>

          Burger Image
          <img
            src="https://img.pikbest.com/png-images/20250415/floating-juicy-burger-_11665643.png!bw700"
            alt="Burger"
            className="relative z-10 w-[360px] drop-shadow-2xl"
          />

          {/* Price Card Left */}
          <div className="absolute left-0 bottom-24 bg-white rounded-xl shadow-lg p-4 w-44 z-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrWr9Aut6ZRJw7B3GKwaU6og_07t9cGddoQ&s"
              alt="Poached Zumbob Burger"
              className="rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-sm">Poached Zumbob Burger</h4>
            <p className="text-xs text-gray-500">10min • 20min</p>
            <p className="mt-1 font-bold text-orange-500">$9.00</p>
          </div>

          {/* Price Card Right */}
          <div className="absolute right-0 bottom-10 bg-white rounded-xl shadow-lg p-4 w-44 z-20">
            <img
              src="https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=300"
              alt="Classic Cheese Burger"
              className="rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-sm">Classic Cheese Burger</h4>
            <p className="text-xs text-gray-500">8min • 20min</p>
            <p className="mt-1 font-bold text-orange-500">$12.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
