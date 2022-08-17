import { useEffect, useState } from "react";
import { getUserBookedEvents } from "../Utility/api";
import { useAuth } from "./authContext";
import EventCard from "./EventCard";
const UserBookedEvents = () => {
  const [userevents, setUserEvents] = useState([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      getUserBookedEvents(currentUser.uid).then((events) => {
        setUserEvents(events);
      });
    }
  }, [currentUser.uid]);

  return (
    <>
      {userevents.map((event) => {
        return <EventCard event={event} />;
      })}
    </>
  );
};

export default UserBookedEvents;
