import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import Loading from "./Loading";

const SelectedEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { currentUser } = useAuth();
  const { event_id } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();
  const [eventOrganiserFirebase_id, seteventOrganiserFirebase_id] =
    useState("");
  const [eventOrganiser, setEventOrganiser] = useState({});

  useEffect(() => {
    getEventsByID(event_id).then((event) => {
      setSingleEvent(event);
      seteventOrganiserFirebase_id(event.firebase_id);
    });
  }, [event_id]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setIsLoading(true);
    if (!currentUser) {
      navigate("/signup");
    }
    const firebase_id = currentUser.uid;
    bookEvent(firebase_id, event_id)
      .then(() => {
        setIsLoading(false);
        navigate("/booking");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
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
    patchUser(newUser);
    setEventOrganiser(newUser);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error occurred, please try again.</h1>;
  }

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
        <div className="thumbs">
          <button onClick={handleClick} value="1" className="thumbsUp">
            👍
          </button>
          <button onClick={handleClick} value="-1" className="thumbsUp">
            👎
          </button>
        </div>
        <p className="eventOrganiser_ratingText">Rate this organiser</p>
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
          Skill Level: ⭐ {singleEvent.skills_level}
        </p>

        <button onClick={handleBookEvent}>Book Event</button>
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
