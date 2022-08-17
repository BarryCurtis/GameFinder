import Map from "./Map";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEvents } from "../Utility/api";
import Loading from "./Loading";
const Home = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    getEvents().then((events) => setEvents(events)).finally(()=>{
      setIsLoading(false)
    })
  }, []);
  if(isLoading){
    return <Loading />
  }
  return (
    <div className="home">
      <div className="map-wrapper"><Map events={events}/></div>
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

