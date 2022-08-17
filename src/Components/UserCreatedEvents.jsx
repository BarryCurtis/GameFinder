import { useEffect, useState } from "react";
import { getEvents } from "../Utility/api";
import { useAuth } from "./authContext";
import EventCard from "./EventCard";
const UserCreatedEvents = () => {
  const [userevents, setUserEvents] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      getEvents().then((events) => {
        setUserEvents(events);
      });
    }
  }, [currentUser.uid]);
  const filteredEvents = userevents.filter((event) => {
    return (event.firebase_id = currentUser.uid);
  });
  return (
    <>
      {filteredEvents.map((event) => {
        return <EventCard event={event} />;
      })}
    </>
  );
};

export default UserCreatedEvents;
