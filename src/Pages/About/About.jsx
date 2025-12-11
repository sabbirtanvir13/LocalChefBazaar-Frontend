import React from "react";

const About = () => {
  return (
    <section className=" text-white to-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
              alt="Chef preparing meal"
              className="w-full h-80 object-cover md:h-96"
            />
          </div>
          <div>
            <h3 className="text-3xl font-extrabold mb-3">About Our Kitchen</h3>
            <p className=" mb-6 leading-relaxed">
              We’re a small team of passionate chefs focused on fresh ingredients,
              bold flavors, and fast delivery. Every meal is prepared with care —
              from our family recipes to seasonal specials.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 grid place-items-center font-semibold text-green-700">✓</div>
                <div>
                  <div className="font-semibold">Fresh Ingredients</div>
                  <div className="text-sm ">Sourced locally when possible.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 grid place-items-center font-semibold text-yellow-700">★</div>
                <div>
                  <div className="font-semibold">Experienced Chefs</div>
                  <div className="text-sm text-gray-500">Years of culinary expertise.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 grid place-items-center font-semibold text-blue-700">⏱</div>
                <div>
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-sm text-gray-500">Hot, on-time delivery guaranteed.</div>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 grid place-items-center font-semibold text-pink-700">❤</div>
                <div>
                  <div className="font-semibold">Community Care</div>
                  <div className="text-sm text-gray-500">Supporting local suppliers & causes.</div>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <button className="inline-block px-6 py-3 bg-amber-600 text-white rounded-xl shadow hover:opacity-95 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
