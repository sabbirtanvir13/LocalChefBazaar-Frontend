import { ShoppingCart, Truck, ChefHat } from "lucide-react";
import burgerimg from '../../../src/assets/pngwing.com.png'
const HighlightSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[420px]">
      
      {/* Left Section */}
     <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 flex items-center justify-center h-[475px] overflow-hidden relative">
        <img
          src={burgerimg}
          alt="Burger"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
        />
 <div className="absolute top-6 left-6 bg-orange-400 px-4 py-2 rounded-lg font-bold text-white text-lg animate-bounce shadow-lg">
          NEW!
        </div>
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-3xl font-extrabold drop-shadow-lg">Tasty Burger</h2>
          <p className="mt-2 text-lg drop-shadow">Hot & Delicious</p>
        </div>




      </div>


      
 

      {/* Middle Section */}
      <div className="grid grid-rows-2 gap-6 min-h-[420px]">
        
        <div className="rounded-2xl h-[200px] overflow-hidden ">
          <img
            src="https://funcakes.com/content/uploads/2023/06/Ice-cream-recipe-960x960-c-default.jpg"
            alt="Dessert"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden relative h-[200px]">
          <img
            src="https://static.toiimg.com/thumb/59723053.cms?width=1200&height=900"
            alt="Fried Food"
            className="w-full h-full object-cover"
          />
        
        </div>

      </div>

    

      {/* Right Section */}
<div className="flex flex-col ml-[50px] justify-center h-[475px]">
  <h2 className="text-3xl font-bold mb-10">
    Our Categories
  </h2>

  <div className="space-y-8">
    <CategoryItem
      icon={<ShoppingCart size={28} />}
      color="bg-red-100 text-red-500"
    />
    <CategoryItem
      icon={<Truck size={28} />}
      color="bg-blue-100 text-blue-500"
    />
    <CategoryItem
      icon={<ChefHat size={28} />}
      color="bg-green-100 text-green-500"
    />
  </div>
</div>


    </div>
  );
};

const CategoryItem = ({ icon, color }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold">Grab Your Delicious Food</h4>
        <p className="text-sm text-gray-500">
          We prepare delicious food for you
        </p>
      </div>
    </div>
  );
};

export default HighlightSection;


// import { ShoppingCart, Truck, ChefHat } from "lucide-react";
// import burgerimg from '../../../src/assets/pngwing.com.png'

// const HighlightSection = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[480px]">

//       {/* Left Section */}
//       <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 flex items-center justify-center h-[475px] overflow-hidden relative">
//         <img
//           src={burgerimg}
//           alt="Burger"
//           className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
//         />
//       </div>

//       {/* Middle Section */}
//       <div className="grid grid-rows-2 gap-6 min-h-[420px]">
//         <div className="rounded-2xl h-[200px] overflow-hidden shadow-lg">
//           <img
//             src="https://funcakes.com/content/uploads/2023/06/Ice-cream-recipe-960x960-c-default.jpg"
//             alt="Dessert"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="rounded-2xl h-[200px] overflow-hidden shadow-lg">
//           <img
//             src="https://static.toiimg.com/thumb/59723053.cms?width=1200&height=900"
//             alt="Fried Food"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col justify-center h-[475px] px-4">
//         <h2 className="text-3xl font-bold mb-10">Our Categories</h2>
//         <div className="space-y-6">
//           <CategoryItem
//             icon={<ShoppingCart size={28} />}
//             color="bg-red-100 text-red-500"
//             title="Order Easily"
//             description="Select your favorite meals effortlessly"
//           />
//           <CategoryItem
//             icon={<Truck size={28} />}
//             color="bg-blue-100 text-blue-500"
//             title="Fast Delivery"
//             description="Delivered hot & fresh to your door"
//           />
//           <CategoryItem
//             icon={<ChefHat size={28} />}
//             color="bg-green-100 text-green-500"
//             title="Expert Chefs"
//             description="Professional chefs prepare every meal"
//           />
//         </div>
//       </div>

//     </div>
//   );
// };

// const CategoryItem = ({ icon, color, title, description }) => {
//   return (
//     <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
//       <div className={`p-3 rounded-full ${color}`}>
//         {icon}
//       </div>
//       <div>
//         <h4 className="font-semibold text-gray-800">{title}</h4>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default HighlightSection;
