import React, { useRef, useState } from "react";
import "./login-form.css";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  const { passwordReset } = useAuth();
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await passwordReset(emailRef.current.value);
      setMessage("check your inbox for further instructions")
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

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img
          className="form-img"
          src="data:image/png;base64,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"
          alt="ToDO App"
        />
        <p style={{ color: "red" }}>{error}</p>
        <p>{message}</p>
        <p>{currentUser && currentUser.email}</p>

        <label htmlFor="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter email address"
          name="email"
          id="email"
          ref={emailRef}
          required
        />
        <button className="sub-but" type="submit" disabled={loading}>
          Reset Password /
        </button>
        <Link to="/login" className="forgot-link">Log In</Link>
      </form>
      <div className="signup-bar">
        <p>Dont have account.. </p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
