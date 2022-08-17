import Paypal from "../Images/Paypal.png";

const Booking = () => {
  return (
    <div>
      <h2>Please pay via Paypal:</h2>
      <img className="paypalimage" alt="paypal" src={Paypal}></img>
    </div>
  );
};

export default Booking;
