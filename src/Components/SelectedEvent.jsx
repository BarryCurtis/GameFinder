import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventsByID } from "../Utility/api";

const SelectedEvent = () => {
  const { event_id } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);

  useEffect(() => {
    getEventsByID(event_id).then((event) => {
      console.log(event);
      setSingleEvent(event);
    });
  }, [event_id]);

  return (
    <div className="selectedevent">
      <p className="eventcard.row event_id">Sport: {singleEvent.category}</p>
      <p className="eventcard.row event_id">🗓️ {singleEvent.date}</p>
      <p className="eventcard.row event_id">🕝 {singleEvent.time}</p>
      <p className="eventcard.row event_id"> ⏱️ {singleEvent.duration}</p>
      <p className="eventcard.row event_id">{singleEvent.location}</p>
      <p className="eventcard.row event_id">{singleEvent.gender}</p>
      <p className="eventcard.row event_id">🎂 {singleEvent.age_group}</p>
      <p className="eventcard.row event_id"> 📈 {singleEvent.skills_level}</p>
    </div>
  );
};

export default SelectedEvent;
