import Paypal from "../Images/Paypal.png";
import { useEffect } from "react";
const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <h2>Please pay via Paypal:</h2>
      <img className="paypalimage" alt="paypal" src={Paypal}></img>
    </div>
  );
};

export default Booking;
