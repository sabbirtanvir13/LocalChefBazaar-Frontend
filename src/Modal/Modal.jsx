// import { useRef } from "react";

// export default function Modal({meal}) {
//   const modalRef = useRef(null);

//   // Dummy total price for design
//   const totalPrice = 440;
// const { foodname, price, chefname, chef = {} } = meal;

//   return (
//     <>
//       {/* Confirm Order Button */}
//       <button
//         className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
//         onClick={() => modalRef.current.showModal()}
//       >
//         Confirm Order
//       </button>

//       {/* Modal */}
//       <dialog ref={modalRef} className="modal">
//         <div className="modal-box max-w-md">
//           <h3 className="font-bold text-xl text-center text-orange-500">
//             Confirm Your Order
//           </h3>

//           <p className="py-6 text-center text-gray-600">
//             Your total price is{" "}
//             <span className="font-bold text-black">${totalPrice}</span>.
//             <br />
//             Do you want to confirm the order?
//           </p>

//           {/* Buttons */}
//           <div className="modal-action flex justify-center gap-4">
//             {/* Cancel */}
//             <button
//               className="btn btn-outline btn-error px-8"
//               onClick={() => modalRef.current.close()}
//             >
//               Cancel
//             </button>

//             {/* Yes / Confirm */}
//             <button
//               className="btn btn-success px-8"
//               onClick={() => {
//                 // future: SweetAlert / API call
//                 modalRef.current.close();
//               }}
//             >
//               Yes, Confirm
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </>
//   );
// }
import { useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function Modal({ meal, quantity = 1, address = "" }) {
    const modalRef = useRef(null);
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);

    if (!meal || !meal._id) return null; // safety check
    const { foodname, _id, price, chefname, ingredients, deliveryArea, delivery, chef = {} } = meal;
    const totalPrice = price * quantity;


    const handelPayment = async () => {
        const paymentInfo = {
            mealId: _id,
            foodname,
            price,
            ingredients,
            deliveryArea,
            delivery,
            quantity,

            chefname,
            chef,
            customer: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photo,
                address: address
            }
        }
        console.log('mealid', _id)
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/create-checkout-session`,
            paymentInfo
        )
        if (data?.url) {
            window.location.href = data.url;
        }
        else {
            console.error("Stripe URL missing");
            setLoading(false)
        }


    }

    return (
        <>
            <button
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                onClick={() => modalRef.current.showModal()}
            >
                Confirm Order
            </button>

            <dialog ref={modalRef} className="modal">
                <div className="modal-box max-w-md">
                    <h3 className="font-bold text-xl text-center text-orange-500">
                        Confirm Your Order
                    </h3>

                    <p className="py-6 text-gray-700 text-center">
                        <strong>Meal:</strong> {foodname} <br />
                        <strong>Chef:</strong> {chefname} <br />
                        <strong>Quantity:</strong> {quantity} <br />
                        <strong>Total Price:</strong> ${totalPrice} <br />
                        <strong>Delivery Address:</strong> {address || "Not provided"}
                    </p>

                    <div className="modal-action flex justify-center gap-4">
                    
                        <button
                            className="btn btn-error"
                            onClick={() => modalRef.current.close()}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-success"
                            disabled={loading}
                            onClick={handelPayment}
                        >
                            {loading ? "Redirecting..." : "Yes, Pay"}
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
