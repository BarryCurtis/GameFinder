import { useAuth } from "../security/authContext";
import { useState } from "react";
import { postUser } from "../Utility/api";

const UserDetails = () => {
  const { currentUser } = useAuth();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [profileIcon, setProfileIcon] = useState();
  const [skillsLevel, setSkillsLevel] = useState();
  const [rating, setRating] = useState(0);
  console.log(gender, name);

  function handleSubmit() {}

  return (
    <div className="userdetails">
      <form onSubmit={handleSubmit}>
        <h2>Create User</h2>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          type="text"
          value={name}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          id="username"
          type="text"
          value={username}
          required
        />
        <label for="age"> Please input your age:</label>
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
          id="age"
          name="age"
          value={age}
        />
        <br></br>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {/* <label for="gender1">Male</label>
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="male"
        />
        <label for="gender2">Female</label>
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="female"
        />
        <label for="gender3">Other</label>
        <input
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          id="gender"
          name="gender"
          value="mixed"
        /> */}
        <br></br>
        <label>
          {" "}
          Please select your skills level, 1 Star being Fun/Beginner, 5 Star
          being Serious/Ex Pro:{" "}
        </label>

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
        <label htmlFor="profileIcon">Profile Icon Image URL:</label>
        <input
          onChange={(e) => {
            setProfileIcon(e.target.value);
          }}
          id="profileIcon"
          type="text"
          value={profileIcon}
          required
        />

        {/* <label for="skill1">1</label>

        <input
          onChange={(e) => {
            setSkillsLevel(e.target.value);
          }}
          type="radio"
          id="skill1"
          name="skill"
          value="1"
        />
        <label for="skill2">2</label>
        <input
          onChange={(e) => {
            setSkillsLevel(e.target.value);
          }}
          type="radio"
          id="skill2"
          name="skill"
          value="2"
        />
        <label for="skill3">3</label>
        <input
          onChange={(e) => {
            setSkillsLevel(e.target.value);
          }}
          type="radio"
          id="skill3"
          name="skill"
          value="3"
        />
        <label for="skill4">4</label>
        <input
          onChange={(e) => {
            setSkillsLevel(e.target.value);
          }}
          type="radio"
          id="skill4"
          name="skill"
          value="4"
        />
        <label for="skill5">5</label>
        <input
          onChange={(e) => {
            setSkillsLevel(e.target.value);
          }}
          type="radio"
          id="skill5"
          name="skill"
          value="5"
        /> */}
        <button>Add User/Submit</button>
      </form>
    </div>
  );
};

export default UserDetails;
