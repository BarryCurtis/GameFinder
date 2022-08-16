import { useState, useEffect } from "react";

const Create = () => {
  const [eventName, setEventName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [skillsLevel, setSkillsLevel] = useState();
  const [players, setPlayers] = useState();

  function handleSubmit() {}

  return (
    <div className="create">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label> Name of Event:</label>
        <input
          onChange={(e) => {
            setEventName(e.target.value);
          }}
          id="eventname"
          type="text"
          value={eventName}
          required
        />
        <label> Description:</label>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="description"
          type="text"
          value={description}
          required
        ></textarea>
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="football">Football</option>
          <option value="netball">Netball</option>
          <option value="squash">Squash</option>
        </select>
        <label>Location: </label>
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          id="location"
          type="text"
          placeholder="Post Code Required"
          value={location}
          required
        />
        <label>Date: </label>
        <input
          onChange={(e) => {
            setDate(e.target.value);
          }}
          id="location"
          type="text"
          placeholder="DD/MM/YY format please"
          value={date}
          required
        />
        <label>Time: </label>
        <input
          onChange={(e) => {
            setTime(e.target.value);
          }}
          id="location"
          type="text"
          placeholder="00:00 format please"
          value={time}
          required
        />
        <label>Duration: </label>
        <input
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          id="location"
          type="text"
          placeholder="hh:mm format please"
          value={duration}
          required
        />
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label>Age Group: </label>
        <select value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="18-30">18-30</option>
          <option value="30-50">30-50</option>
          <option value="50+">50+</option>
        </select>
        <label>Skill Level: </label>
        <select
          value={skillsLevel}
          onChange={(e) => setSkillsLevel(e.target.value)}
        >
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>

        <label>Players Required: </label>
        <select value={players} onChange={(e) => setPlayers(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <button>Add Event</button>
      </form>
    </div>
  );
};

export default Create;
