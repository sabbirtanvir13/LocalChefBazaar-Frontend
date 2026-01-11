import React from 'react';


const CTA = () => {
    return (

         <section className="bg-orange-500 rounded-2xl md:ml-10 md:mr-10 text-white py-20">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-6">
      Order Fresh Homemade Food from Local Chefs
    </h2>
    <p className="text-lg opacity-90 mb-10">
      Support local chefs and enjoy healthy, hygienic, and delicious homemade meals
      delivered straight to your doorstep.
    </p>

    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href="/allChef"
        className="px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:opacity-90"
      >
        Explore Chefs
      </a>
      <a
        href="/about"
        className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-orange-500 transition"
      >
       About Us
      </a>
    </div>
  </div>
</section>


    );
};

export default CTA;