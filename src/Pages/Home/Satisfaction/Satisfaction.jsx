import React from "react";

export default function Satisfaction() {
    return (
        <section className="bg-[#fff7f0] py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center relative">
                {/* Heading */}
                <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900">
                    Your satisfaction is our duty
                </h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm">
                    Preparing delicious food with the best quality ingredients and fast delivery to give you the best experience
                </p>


                {/* Curved dotted path */}
                <svg
                    className="absolute left-1/2 top-44 -translate-x-1/2 hidden md:block"
                    width="900"
                    height="220"
                    viewBox="0 0 900 220"
                    fill="none"
                >
                    <path
                        d="M20 120 C150 20, 300 20, 380 120 S610 220, 760 120"
                        stroke="#fb923c"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        fill="none"
                    />
                </svg>


                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-24 relative z-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl font-bold">
                            ↺
                        </div>
                        <p className="mt-4 font-semibold">Order your favourite meal</p>
                    </div>


                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=300"
                                alt="Preparing"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-4 font-semibold">Preparing your meal</p>
                    </div>


                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl font-bold">
                            ✉
                        </div>
                        <p className="mt-4 font-semibold">Delivering your meal box</p>
                    </div>


                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300"
                                alt="Enjoy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-4 font-semibold">Enjoy your warm & fresh food</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
