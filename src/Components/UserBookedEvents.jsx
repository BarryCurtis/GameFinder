import { useEffect, useState } from "react";
import { getUserBookedEvents } from "../Utility/api";
import { useAuth } from "../security/authContext";
import EventCard from "./EventCard";
import Loading from "./Loading";
const UserBookedEvents = () => {
  const [userevents, setUserEvents] = useState([]);
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (currentUser) {
      setIsLoading(true)
      getUserBookedEvents(currentUser.uid).then((events) => {
        setUserEvents(events);
      }).finally(()=>{
        setIsLoading(false)
      })
    }
  }, [currentUser.uid]);
  if(isLoading){
    return <Loading />
  }
  return (
    <>
      {userevents && userevents.map((event) => {
        return <EventCard event={event} />;
      })}
    </>
  );
};

export default UserBookedEvents;
