import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Food1 from '../../../assets/Food1.png'
import Container from "../../Shared/Container";
export default function FoodHeroCircle() {
 const foods = [
  {
    title: "Home-Cooked Goodness",
    desc: "Discover delicious meals made by local chefs from your neighborhood.",
    img: Food1,
  },
  {
    title: "Fresh & Healthy",
    desc: "Enjoy fresh, wholesome meals prepared with love and care.",
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
  },
  {
    title: "Taste the Local Flavors",
    desc: "Savor authentic dishes crafted by talented home chefs near you.",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    title: "Chefs’ Special Picks",
    desc: "Try our chefs’ favorite meals, full of flavor and passion.",
    img: "https://png.pngtree.com/png-clipart/20240621/original/pngtree-one-plate-chicken-biryani-png-image_15376393.png",
  },
];

  const [active, setActive] = useState(0);

  return (
    
   <Container>
 <div className=" mt-7  flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-8">
  {/* Left Content */}
  <div className="max-w-xl space-y-6">
    <AnimatePresence mode="wait">
      <motion.h1
        key={foods[active].title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-4xl lg:text-5xl font-bold text-purple-600"
      >
        {foods[active].title}
      </motion.h1>
    </AnimatePresence>

    <AnimatePresence mode="wait">
      <motion.p
        key={foods[active].desc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-gray-600"
      >
        {foods[active].desc}
      </motion.p>
    </AnimatePresence>

    <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
      Explore Meals
    </button>

    <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
      Order
    </button>
  </div>


  <div className="relative w-[350px] h-[350px] mt-6 lg:mt-0">
  
    <AnimatePresence mode="wait">
      <motion.img
        key={foods[active].img}
        src={foods[active].img}
        className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>

    
    {foods.map((food, i) => {
      const angle = (360 / foods.length) * i;
      const radius = 160;
      const x = 175 + radius * Math.cos((angle * Math.PI) / 180);
      const y = 175 + radius * Math.sin((angle * Math.PI) / 180);

      return (
        <motion.img
          key={i}
          src={food.img}
          onClick={() => setActive(i)}
          whileHover={{ scale: 1.2 }}
          className={`absolute w-16 h-16 rounded-full object-cover cursor-pointer border-2
            ${active === i ? "border-orange-500" : "border-white"}`}
          style={{
            left: x - 32,
            top: y - 32,
          }}
        />
      );
    })}
  </div>
</div>

   </Container>
  );
}
