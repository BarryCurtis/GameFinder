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
      <img
        className="sportpic"
        src="http://www.colleges-fenway.org/wp-content/uploads/2020/04/bigstock-Four-Sports-a-lot-of-balls-an-50626115-480x240.jpg"
        alt="sportimage"
      ></img>
      <h4 className="accountheader">Please Login or Sign Up:</h4>
      <form className="login-form" onSubmit={handleSubmit}>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
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
        <div className="flex-center">
          <button className="login-button" type="submit" disabled={loading}>
            Log In
          </button>

          <Link to="/signup" className="signupbar">
            Sign Up
          </Link>
        </div>
      </form>
      <Link to="/password-reset" className="forgot-link">
        Forgot Password
      </Link>
      <br></br>
    </div>
  );
};

export default LogIn;
