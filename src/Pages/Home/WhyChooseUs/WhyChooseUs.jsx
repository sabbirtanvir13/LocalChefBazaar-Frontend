import React from 'react';
import Container from '../../Shared/Container';
import { FaBowlFood } from 'react-icons/fa6';


const WhyChooseUs = () => {
    return (
        <Container>
            <div>
                <h3 className="text-3xl text-yellow-500 text-center mb-10">Why Choose Us</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-[200px]">


                    <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
                        <img src="https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-a-complete-try-of-fast-food-icon-image-png-image_12645728.png" alt="" className="w-14 h-14 mb-4" />
                        <h5 className="text-xl font-semibold mb-2">Fresh & Homemade</h5>
                        <p className="text-gray-600 text-sm">
                            Every meal is cooked with love by local chefs.
                        </p>
                    </div>


                    <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
                        <img src="https://cdn-icons-png.freepik.com/256/5457/5457799.png?semt=ais_white_label" alt="" className="w-14 h-14 mb-4" />
                        <h5 className="text-xl font-semibold mb-2">Fast & Reliable <br />Delivery</h5>
                        <p className="text-gray-600 text-sm">
                            Enjoy hot meals delivered quickly to your doorstep.
                        </p>
                    </div>





                    <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center shadow">
                        <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png" alt="" className="w-14 h-14 mb-4" />
                        <h5 className="text-xl font-semibold mb-2">Customer Satisfaction</h5>
                        <p className="text-gray-600 text-sm">
                            Real reviews and ratings ensure quality you can trust.
                        </p>
                    </div>

                </div>

            </div>
        </Container>
    );
};

export default WhyChooseUs;