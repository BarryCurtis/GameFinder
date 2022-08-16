import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventsByID } from "../Utility/api";
import { getComments } from "../Utility/api";
import { useAuth } from "../security/authContext";
import { postComment } from "../Utility/api";

const SelectedEvent = () => {
  const { currentUser } = useAuth();
  const { event_id } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(false);

  useEffect(() => {
    getEventsByID(event_id).then((event) => {
      setSingleEvent(event);
    });
  }, [event_id]);

  useEffect(() => {
    getComments(event_id).then((data) => {
      setComments(data);
    });
  }, [event_id]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const commentToSend = {
      firebase_id: `${currentUser.uid}`,
      event_id: Number(event_id),
      comment_body: newComment,
      comment_time: new Date(Date.now()).toISOString(),
    };
    postComment(event_id, commentToSend);

    setCommentAdded(true);
    // window.location.reload();
  };

  return (
    <div>
      <div className="selectedevent">
        <p className="eventcard.row event_id">Sport: {singleEvent.category}</p>
        <p className="eventcard.row event_id">🗓️ {singleEvent.date}</p>
        <p className="eventcard.row event_id">🕝 {singleEvent.time}</p>
        <p className="eventcard.row event_id"> ⏱️ {singleEvent.duration}</p>
        <p className="eventcard.row event_id">{singleEvent.location}</p>
        <p className="eventcard.row event_id">{singleEvent.gender}</p>
        <p className="eventcard.row event_id">🎂 {singleEvent.age_group}</p>
        <p className="eventcard.row event_id"> 📈 {singleEvent.skills_level}</p>
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
      <div className="selectedEvent_addComments">
        <h3 className="selectedEvents.comments.title">
          Post a new comments about this event :
        </h3>
        <form onSubmit={handleSubmit} className="selectedEvent.addComment">
          <textarea
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
            className="selectedEvent.addComment.commentArea"
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
