import React from 'react';

// --- Image Links (Placeholders) ---
const sandwichImage = 'https://img.freepik.com/premium-photo/bargar-fast-food-image-ai-generated_812649-412.jpg';

const Offer = () => {
  return (
    <div className="flex  text-white min-h-[300px] items-center relative overflow-hidden">
     
      <div className="relative w-1/2 flex items-center justify-center">
        
   
        <div className="absolute bg-[#FFF7E8] rounded-full w-[400px] h-[400px] md:w-[400px] md:h-[400px]"></div>

 
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden z-10">
          <img 
            src={sandwichImage} 
            alt="Two large sub sandwiches" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>

        <div className="absolute md:ml-[320px] md:mt-[25px] top-0 left-0 transform -translate-x-1/4 -translate-y-1/4
                        bg-yellow-400 text-black font-extrabold text-sm md:text-lg 
                        w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center 
                        shadow-lg rotate-[-15deg] z-20">
          <span className="flex flex-col items-center leading-none">
            <span className="text-xl md:text-2xl">30%</span>
            <span className="text-sm md:text-base">OFF</span>
          </span>
        </div>
      </div>
      

      <div className="w-1/2 pl-8 pr-16 py-8">
        <h2 className="text-3xl text-black md:text-4xl font-extrabold mb-4">
          <span className="text-yellow-500">Hot Offer</span> of the Week
        </h2>
        <h3 className="text-2xl text-black md:text-3xl font-bold mb-8">
          Grab it before it's gone!
        </h3>
        
        <p className="text-black text-sm">
          A clean, well-crafted design lets the flavors speak 
          for themselves. Let our stunning food photography 
          and irresistible new menu do the talking.
        </p>
      </div>


     
    </div>
  );
};

export default Offer;
