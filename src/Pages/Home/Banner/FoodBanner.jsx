

// import React from "react";

// export default function FoodBanner() {
//   return (
//     <section className="bg-[#fff7f0] min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div>
//           <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
//             Yummy <br />
//             tasty <span className="inline-flex items-center gap-2 text-orange-500">🍔 burger</span> <br />
//             in the town
//           </h1>

//           <p className="mt-6 text-gray-600 max-w-md">
//             Have A Bite On The Best Yummy Burger In The Town Within An Hour Without Any Worry Of Payment
//           </p>

//           <div className="mt-8 flex items-center gap-4">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow">
//               Order Now
//             </button>
//             <button className="flex items-center gap-2 border border-orange-300 px-6 py-3 rounded-full text-orange-500 font-semibold">
//               ▶ Watch Cooking
//             </button>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="relative flex justify-center">
//           {/* Background Circle */}
//           <div className="absolute w-[420px] h-[420px] bg-[#1a1a3c] rounded-full right-0"></div>

//           Burger Image
//           <img
//             src="https://img.pikbest.com/png-images/20250415/floating-juicy-burger-_11665643.png!bw700"
//             alt="Burger"
//             className="relative z-10 w-[360px] drop-shadow-2xl"
//           />

//           {/* Price Card Left */}
//           <div className="absolute left-0 bottom-24 bg-white rounded-xl shadow-lg p-4 w-44 z-20">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrWr9Aut6ZRJw7B3GKwaU6og_07t9cGddoQ&s"
//               alt="Poached Zumbob Burger"
//               className="rounded-lg"
//             />
//             <h4 className="mt-2 font-semibold text-sm">Poached Zumbob Burger</h4>
//             <p className="text-xs text-gray-500">10min • 20min</p>
//             <p className="mt-1 font-bold text-orange-500">$9.00</p>
//           </div>

//           {/* Price Card Right */}
//           <div className="absolute right-0 bottom-10 bg-white rounded-xl shadow-lg p-4 w-44 z-20">
//             <img
//               src="https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=300"
//               alt="Classic Cheese Burger"
//               className="rounded-lg"
//             />
//             <h4 className="mt-2 font-semibold text-sm">Classic Cheese Burger</h4>
//             <p className="text-xs text-gray-500">8min • 20min</p>
//             <p className="mt-1 font-bold text-orange-500">$12.00</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import BargerBanner from '../../../../src/assets/floating-juicy-burger-_11665643 (1).png'
export default function FoodBanner() {
  return (
    <section className="bg-[#fff7f0] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Yummy <br />
            tasty{" "}
            <span className="inline-flex items-center gap-2 text-orange-500">
              🍔 burger
            </span>{" "}
            <br />
            in the town
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Have A Bite On The Best Yummy Burger In The Town Within An Hour
            Without Any Worry Of Payment
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg transition">
              Order Now
            </button>

            <button className="flex items-center gap-2 border border-orange-300 px-7 py-3 rounded-full text-orange-500 font-semibold hover:bg-orange-50 transition">
              ▶ Watch Cooking
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center">

          {/* BACKGROUND CIRCLE */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2
            w-[420px] h-[420px] bg-[#1a1a3c] rounded-full"
          ></div>

          {/* BURGER IMAGE */}
          <img
            src={BargerBanner}
            alt="Burger"
            className="relative z-10 w-[360px] drop-shadow-2xl"
          />

          {/* LEFT PRICE CARD */}
          <div className="absolute left-0 bottom-24 bg-white rounded-xl shadow-xl p-4 w-44 z-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrWr9Aut6ZRJw7B3GKwaU6og_07t9cGddoQ&s"
              alt="Poached Zumbob Burger"
              className="rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-sm">
              Poached Zumbob Burger
            </h4>
            <p className="text-xs text-gray-500">10min • 20min</p>
            <p className="mt-1 font-bold text-orange-500">$9.00</p>
          </div>

          {/* RIGHT PRICE CARD */}
          <div className="absolute right-0 bottom-10 bg-white rounded-xl shadow-xl p-4 w-44 z-20">
            <img
              src="https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=300"
              alt="Classic Cheese Burger"
              className="rounded-lg"
            />
            <h4 className="mt-2 font-semibold text-sm">
              Classic Cheese Burger
            </h4>
            <p className="text-xs text-gray-500">8min • 20min</p>
            <p className="mt-1 font-bold text-orange-500">$12.00</p>
          </div>

        </div>
      </div>
    </section>
  );
}
