import Map from "./Map";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEvents } from "../Utility/api";
const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((events) => setEvents(events));
  }, []);
  return (
    <div className="home">
      <Map events={events}/>
      <br />
      <div className="home.buttons">
        <Link to="/events">
          <button>Find A Game</button>
        </Link>
        <Link to="/create">
          <button>Create Event</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   status: {
//     primary: "#0a2145",
//   },
// });
