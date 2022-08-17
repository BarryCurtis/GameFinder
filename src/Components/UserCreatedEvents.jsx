import { useEffect, useState } from "react";
import { getEvents } from "../Utility/api";
import { useAuth } from "../security/authContext";
import EventCard from "./EventCard";
import Loading from "./Loading";
import CreatedEventCard from "./CreatedEventCard";
const UserCreatedEvents = () => {
  const [userevents, setUserEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      setIsLoading(true)
      getEvents().then((events) => {
        setUserEvents(events);
      }).finally(()=>{
        setIsLoading(false)
      })
    }
  }, [currentUser.uid]);
  const filteredEvents = userevents.filter((event) => {
    return (event.firebase_id === currentUser.uid);
  });
  if(isLoading){
    return <Loading />
  }
  return (
    <>
      {filteredEvents.map((event) => {
        return <CreatedEventCard event={event} />;
      })}
    </>
  );
};

export default UserCreatedEvents;
