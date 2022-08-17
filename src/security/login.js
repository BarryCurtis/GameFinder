import React, { useRef, useState } from "react";
import "./login-form.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
const LogIn = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message
        .replace("Firebase: Error (auth/", "")
        .replace(").", "")
        .replace("Firebase:", "")
        .replace("(auth/", "");
      setError(errorMessage);
    }
    setLoading(false);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="login-form-container">
      <h3 className="accountheader">Please Login or Sign Up</h3>
      <img
        className="sportpic"
        src="https://cdn.images.express.co.uk/img/dynamic/4/750x445/1280284.jpg"
        alt="sportimage"
      ></img>
      <form className="login-form" onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>
        <p>{currentUser && currentUser.email}</p>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter email address"
          name="email"
          id="email"
          ref={emailRef}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          ref={passwordRef}
        />
        <button className="sub-but" type="submit" disabled={loading}>
          Log In
        </button>
      </form>
      <Link to="/password-reset" className="forgot-link">
        Forgot Password
      </Link>
      <br></br>
      <Link to="/signup" className="signupbar">
        Sign Up
      </Link>
    </div>
  );
};

export default LogIn;
