// import axios from "axios";
// import { useEffect } from "react";
// import { useSearchParams } from "react-router";

// export const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const sessionId = searchParams.get("session_id");
//  useEffect(()=>{
// if(sessionId){
// // fetch
// axios.post(`${import.meta.env.VITE_API_URL}/paymentsuccessfull`,{sessionId})
// }
//  },[sessionId])
//   return (
//     <div>
//       <h1>✅ Payment Successful</h1>
//       <p>Session ID: {sessionId}</p>
//     </div>
//   );
// };
import axios from "axios";
import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  // useEffect(() => {
  //   if (!sessionId) return;

  //   axios
  //     .post(`${import.meta.env.VITE_API_URL}/paymentsuccessfull`, { sessionId })
  //     .then(res => {
  //       console.log("✅ Order saved:", res.data);
  //     })
  //     .catch(err => {
  //       console.error("❌ Save failed:", err);
  //     });

  // }, [sessionId]);


const calledRef = useRef(false);

useEffect(() => {
  if (!sessionId || calledRef.current) return;

  calledRef.current = true;

  axios.post(`${import.meta.env.VITE_API_URL}/paymentsuccessfull`, { sessionId });
}, [sessionId]);

  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
      <div className='bg-white p-10 rounded-lg shadow-lg text-center'>
        {/* <IoBagCheckOutline className='w-16 h-16 text-green-500 mx-auto mb-4' /> */}
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Payment Successful!
        </h1>
        <p className='text-gray-600 mb-6'>
          Thank you for your purchase. Your order is being processed.
        </p>
        <Link
          to='/dashboard/my-orders'
          className='inline-block bg-lime-500 text-white font-semibold py-2 px-4 rounded hover:bg-lime-600 transition duration-300'
        >
          Go to My Orders
        </Link>
      </div>
    </div>
    </div>
  );
};

