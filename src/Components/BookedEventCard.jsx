import { cardImages } from "../Images/card.images";
import { cancelEvent } from "../Utility/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContext";
const BookedEventCard = ({ event }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/account`);
    cancelEvent(event.event_id);
  }
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
      <p className="eventcard-text">Skill Lvel: ⭐ {event.skills_level}</p>
      <p className="eventcard-text">
        Players Needed: 🤼 {event.needed_players}
      </p>
      <button onClick={handleClick}>Cancel Booking</button>
    </div>
  );
};

export default BookedEventCard;
