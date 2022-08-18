import React, { useRef, useState } from "react";
import "./signUpPage-style.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const SignUp = () => {
  const passwordconfirmRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordconfirmRef.current.value) {
      return setError("passowrd does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/user-details");
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
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        <img
          className="sportpic"
          src="http://www.colleges-fenway.org/wp-content/uploads/2020/04/bigstock-Four-Sports-a-lot-of-balls-an-50626115-480x240.jpg"
          alt="sportimage"
        ></img>
        <h4>Please sign up to proceed:</h4>
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
        <label htmlFor="pswconfirm">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="pswconfirm"
          id="pswcon"
          ref={passwordconfirmRef}
        />
        <div className="wrapper">
          <button className="sub-but" type="submit" disabled={loading}>
            SignUp
          </button>
          <p className="existingusertext">Or </p>
          <Link className="loginbutton" to="/login">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
