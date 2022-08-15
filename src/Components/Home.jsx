import Map from "./Map";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Map />
      <br />
      <Link to="/events">
        {" "}
        <button className="HomeChoice">Find A Game</button>
      </Link>
      <Link to="/create">
        <button className="HomeChoice">Create Event</button>
      </Link>
    </div>
  );
};

export default Home;
