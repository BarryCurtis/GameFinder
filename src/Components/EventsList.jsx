import Map from "./Map";
import Filters from "./Filters";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../Utility/api";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((events) => setEvents(events));
  }, []);

  return (
    <div className="eventslist">
      <h2 className="eventslist.subtitle">See Latest Bookable Events Below</h2>
      <Map events={events} />
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
