import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventsByID } from "../Utility/api";
import { getComments } from "../Utility/api";
import { useAuth } from "../security/authContext";
import { postComment } from "../Utility/api";
import { getUserByID } from "../Utility/api";

const SelectedEvent = () => {
  const { currentUser } = useAuth();
  const { event_id } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [eventOrganiserFirebase_id, seteventOrganiserFirebase_id] =
    useState("");
  const [eventOrganiser, setEventOrangiser] = useState({});

  useEffect(() => {
    getEventsByID(event_id).then((event) => {
      setSingleEvent(event);
      seteventOrganiserFirebase_id(event.firebase_id).then(() => {});
    });
  }, [event_id]);

  useEffect(() => {
    getComments(event_id).then((data) => {
      setComments(data);
    });
  }, [event_id]);

  useEffect(() => {
    getUserByID(eventOrganiserFirebase_id).then((data) => {
      setEventOrangiser(data);
    });
  }, [event_id, eventOrganiser, eventOrganiserFirebase_id]);

  const handleSubmit = (e) => {
    const commentToSend = {
      firebase_id: `${currentUser.uid}`,
      event_id: Number(event_id),
      comment_body: newComment,
      comment_time: new Date(Date.now()).toISOString(),
    };
    postComment(event_id, commentToSend);
  };

  return (
    <div>
      <div className="selectedevent">
        <img
          className="eventorganiser"
          src={eventOrganiser.profile_icon}
          alt={eventOrganiser.profile_icon}
        />
        <p>Your Event Organiser is:</p>
        <p className="organisertext">{eventOrganiser.username}</p>

        <p className="eventOrganiser_rating">Rated: {eventOrganiser.rating}</p>
        <p className="eventcard.row event_id">Sport: {singleEvent.category}</p>

        <p className="eventcard.row event_id">
          Event Date: 📅 {singleEvent.date}
        </p>
        <p className="eventcard.row event_id">Time: ⏰ {singleEvent.time}</p>
        <p className="eventcard.row event_id">
          {" "}
          Duration: ⌛ {singleEvent.duration}
        </p>
        <p className="eventcard.row event_id">
          Location: 📍 {singleEvent.location}
        </p>
        <p className="eventcard.row event_id">
          {" "}
          Gender: 🧑‍🤝‍🧑 {singleEvent.gender}
        </p>
        <p className="eventcard.row event_id">
          Age Group: 🔞 {singleEvent.age_group}
        </p>
        <p className="eventcard.row event_id">
          Skill Lvel: ⭐ {singleEvent.skills_level}
        </p>
        <button>Book Event</button>
      </div>
      <div className="selectEvent comments">
        <h3 className="selectedEvents comments title">
          Comments about this event :
        </h3>

        {comments.length > 0 ? (
          comments.map((c) => {
            return <p>{c.comment_body}</p>;
          })
        ) : (
          <h4>No comments yet for this article</h4>
        )}
      </div>
      <div className="selectedEvent_addComment">
        <h3 className="selectedEvents.comments.title">
          Post a new comments about this event :
        </h3>
        <form onSubmit={handleSubmit} className="selectedEvent_addComment">
          <textarea
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            id="newComment"
            name="newComment"
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <button>Add comment</button>
        </form>
      </div>
    </div>
  );
};

export default SelectedEvent;
