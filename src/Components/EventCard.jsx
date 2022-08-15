const EventCard = ({ event }) => {
  return (
    <div className="eventcard">
      <p className="eventcard event_id">{event.event_id}</p>
      <p className="eventcard event_id">{event.category}</p>
      <p className="eventcard event_id">{event.firebase_id}</p>
      <p className="eventcard event_id">{event.age_group}</p>
      <p className="eventcard event_id">{event.gender}</p>
    </div>
  );
};

export default EventCard;
