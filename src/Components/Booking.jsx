import Paypal from "../Images/Paypal.png";
import { useEffect } from "react";
const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <p>Please pay via Paypal:</p>
      <img src={Paypal}></img>
    </div>
  );
};

export default Booking;
