import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getComments,
  patchEvent,
  postComment,
  getEventsByID,
  bookEvent,
  getUserByID,
  patchUser,
} from "../Utility/api";
import { useAuth } from "../security/authContext";

const SelectedEvent = () => {
  const { currentUser } = useAuth();
  const { event_id } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [eventOrganiserFirebase_id, seteventOrganiserFirebase_id] =
    useState("");
  const [eventOrganiser, setEventOrganiser] = useState({});

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
      setEventOrganiser(data);
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
  const handleBookEvent = () => {
    const firebase_id = currentUser.uid;
    bookEvent(firebase_id, event_id);
  };

  const handleClick = (e) => {
    const newUser = {
      firebase_id: eventOrganiser.firebase_id,
      name: eventOrganiser.name,
      username: eventOrganiser.username,
      age: eventOrganiser.age,
      gender: eventOrganiser.gender,
      profile_icon: eventOrganiser.profile_icon,
      skills_level: Number(eventOrganiser.skills_level),
      rating: eventOrganiser.rating + Number(e.target.value),
      event_id: eventOrganiser.event_id,
    };
    console.log(newUser);
    patchUser(newUser);
    setEventOrganiser(newUser);
  };

  return (
    <div>
      <div className="selectedevent">
        <img
          className="selectedEvent_eventOrganiser"
          src={eventOrganiser.profile_icon}
          alt={eventOrganiser.profile_icon}
        />
        <p className="eventOrganiser_user">
          Organiser: {eventOrganiser.username}
        </p>

        <p className="eventOrganiser_rating">Rated: {eventOrganiser.rating}</p>
        <button onClick={handleClick} value="1" className="thumbsUp">
          👍
        </button>
        <p className="eventOrganiser_ratingText">Rate this organiser</p>
        <button onClick={handleClick} value="-1" className="thumbsUp">
          👎
        </button>
        <p className="eventcard.row event_id">Sport: {singleEvent.category}</p>

        <p className="eventcard.row event_id">🗓️ {singleEvent.date}</p>
        <p className="eventcard.row event_id">🕝 {singleEvent.time}</p>
        <p className="eventcard.row event_id"> ⏱️ {singleEvent.duration}</p>
        <p className="eventcard.row event_id">{singleEvent.location}</p>
        <p className="eventcard.row event_id">{singleEvent.gender}</p>
        <p className="eventcard.row event_id">🎂 {singleEvent.age_group}</p>
        <p className="eventcard.row event_id"> 📈 {singleEvent.skills_level}</p>
        <Link to={`/events/booking`}>
          <button onClick={handleBookEvent}>Book Event</button>
        </Link>
      </div>
      <div className="selectEvent comments">
        <h3 className="selectedEvents comments title">
          Comments about this event :
        </h3>

        {comments.length > 0 ? (
          comments.map((c) => {
            return <p key={c.comment_id}>{c.comment_body}</p>;
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
