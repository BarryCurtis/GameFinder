import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import EventsList from "./Components/EventsList";
import Account from "./Components/Account";
import React from "react";
import SignUp from "./security/signup";
import LogIn from "./security/login";
import LogOut from "./security/LogOut";
import { AuthProvider } from "./security/authContext";
import RequireAuth from "./security/RequireAuth";
import ForgotPassword from "./security/forgotPassword";
import UpdateProfile from "./security/updateProfile";
import { useAuth } from "./security/authContext";
import UserDetails from "./Components/UserDetails";
import SelectedEvent from "./Components/SelectedEvent";


function App() {
  // const { currentUser } = useAuth();
  // console.log(currentUser);
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/events/:event_id" element={<SelectedEvent />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<ForgotPassword />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
