import Map from "./Map";
import Filters from "./Filters";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
const axios = require("axios");

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://babsfindagame.herokuapp.com/api/events`, {})
      .then((res) => setEvents(res.data.events));
  }, []);

  return (
    <div>
      <h2 className="eventslist.subtitle">See current events below</h2>
      <Map />
      <div className="eventslist filters">
        <Filters />
      </div>
      <div className="eventslist list">
        {events.map((e) => {
          return <EventCard event={e} key={e.event_id} />;
        })}
      </div>
    </div>
  );
};

export default EventsList;

// {
//   event_id: 1,
//   firebase_id: "1a",
//   category: "football",
//   date: "19/08/2022",
//   time: "20:00",
//   duration: 1,
//   gender: "male",
//   skills_level: 1,
//   location: "M8 0AE",
//   needed_players: 3,
//   age_group: "50+",
//   cost: 5,
// },
