import React from "react";
import Container from "../../Shared/Container";

const TopChef = () => {
  const chefs = [
    {
      name: "Chef Anna",
      img: "https://i.ibb.co/BV9yMbQ3/download-10.png",
      specialty: "Italian Cuisine",
    },
    {
      name: "Chef Brian",
      img: "https://i.ibb.co/YBfCg9Gg/download-12.png",
      specialty: "Bakery & Desserts",
    },
    {
      name: "Chef Clara",
      img: "https://i.ibb.co/mFbMp38V/download-11.png",
      specialty: "Asian Fusion",
    },
  ];

  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Meet Our Top Chefs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="relative bg-[#ece0d1] rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-72 md:h-80 lg:h-96 object-contain p-6"
              />
              <div className="p-6 text-center">
                <h4 className="text-2xl font-semibold mb-2">{chef.name}</h4>
                <p className="text-gray-600">{chef.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TopChef;
