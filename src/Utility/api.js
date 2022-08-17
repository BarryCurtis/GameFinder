import axios from "axios";

const myApi = axios.create({
  baseURL: "https://babsfindagame.herokuapp.com/api/",
});

export function getEvents() {
  return myApi.get("/events").then(({ data }) => {
    return data.events;
  });
}

export function getEventsByID(event_id) {
  return myApi.get(`events/${event_id}`).then(({ data }) => {
    return data.event;
  });
}

export function getUserByID(firebase_id) {
  return myApi.get(`users/${firebase_id}`).then(({ data }) => {
    return data.user;
  });
}

export function getComments(event_id) {
  return myApi.get(`/events/${event_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function postComment(event_id, comment) {
  return myApi.post(`/events/${event_id}/comments`, comment);
}

export function postEvent(eventToSend) {
  return myApi.post("/events", eventToSend);
}

export function postUser(user) {
  return myApi.post("/users", user);
}

export function patchEvent(event_id, updatedEvent) {
  return myApi.patch(`/events/${event_id}`, updatedEvent).then((data) => {
    console.log(data);
  });
}
export function bookEvent(firebase, event) {
  const bookingEvent = { firebase_id: firebase, event_id: event };
  console.log(bookingEvent);
  return myApi.post(`/user/events`, bookingEvent).then((data) => {
    return data.event;
  });
}

export function patchUser(firebase_id) {
  return myApi.patch(`/users/${firebase_id}`).then(({ data }) => {
    return data.user;
  });
}
