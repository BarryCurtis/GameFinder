import { useAuth } from "../security/authContext";
import { useState } from "react";

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
  return (
    <form action="">
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
      <br></br>
      <label for="gender1">Male</label>
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
      />

      <p>Please select your age group:</p>
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="radio"
        id="age1"
        name="age"
        value="30"
      />
      <label for="age1">18 - 30</label>
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="radio"
        id="age2"
        name="age"
        value="60"
      />
      <label for="age2">31 - 50</label>
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="radio"
        id="age3"
        name="age"
        value="100"
      />
      <label for="age3">50+</label>
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="submit"
        value="Submit"
      ></input>
      <br></br>
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
      <p>
        Please select your skills level, 1 being fun/beginner, 5 being
        serious/professional:
      </p>
      <label for="skill1">1</label>
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
      />
    </form>
  );
};

export default UserDetails;

{
  /* username VARCHAR(50) NOT NULL,
        name VARCHAR(100) NOT NULL,
        age INT,
        gender TEXT,
        profile_icon VARCHAR,
        skills_level TEXT,
        rating INT,
        event_id INT */
}
