import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
 useEffect(()=>{
if(sessionId){
// fetch
axios.post(`${import.meta.env.VITE_API_URL}/paymentsuccessfull`,{sessionId})
}
 },[sessionId])
  return (
    <div>
      <h1>✅ Payment Successful</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
};
