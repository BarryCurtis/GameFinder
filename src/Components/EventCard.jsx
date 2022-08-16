import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  return (
    <div className="eventcard">
      <p className="eventcard.row event_id">Sport: {event.category}</p>
      <p className="eventcard.row event_id">🗓️ {event.date}</p>
      <p className="eventcard.row event_id">🕝 {event.time}</p>
      <p className="eventcard.row event_id"> ⏱️ {event.duration}</p>
      <p className="eventcard.row event_id">{event.location}</p>
      <p className="eventcard.row event_id">{event.gender}</p>
      <p className="eventcard.row event_id">🎂 {event.age_group}</p>
      <p className="eventcard.row event_id"> 📈 {event.skills_level}</p>
      <Link to={`/events/${event.event_id}`}>
        <button>Select Event</button>
      </Link>
    </div>
  );
};

export default EventCard;
