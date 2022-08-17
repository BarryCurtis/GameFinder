import { Link } from "react-router-dom";
import { cardImages } from "../Images/card.images";

const EventCard = ({ event }) => {
  return (
    <div className="eventcard">
      <img
        className="eventimage"
        src={cardImages[event.category]}
        alt={event.category}
      ></img>
      <p className="eventcard-text"> Event Date: 📅 {event.date}</p>
      <p className="eventcard-text">Time: ⏰ {event.time} </p>
      <p className="eventcard-text"> Duration: ⌛ {event.duration}</p>
      <p className="eventcard-text">Location: 📍 {event.location}</p>
      <p className="eventcard-text">Gender: 🧑‍🤝‍🧑 {event.gender}</p>
      <p className="eventcard-text">Age Group: 🔞 {event.age_group}</p>
      <p className="eventcard-text">Skill Level: ⭐ {event.skills_level}</p>
      <p className="eventcard-text">
        Players Needed: 🤼 {event.needed_players}
      </p>
      <Link to={`/events/${event.event_id}`}>
        <button>Select Event</button>
      </Link>
    </div>
  );
};

export default EventCard;
