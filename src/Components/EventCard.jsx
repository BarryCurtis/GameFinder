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

// {

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
