import React from "react";
import "./signupPage.css";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

export default function createAccount() {
  return (
    <>
      <div className="sign">
        <div className="firstdiv">
          <h1 className="h1s">Welcome,Olivia</h1>
          <p className="paraa">Welcome back!Please enter your details.</p>
          <button className="button">
            <GoogleIcon />
            Log in With Google
          </button>
          <div className="or">
            <p className="paragraph">
              <span>or</span>
            </p>
          </div>
          <input name="name" placeholder="Name" className="email" />
          <input name="email" placeholder="Email" className="email" />
          <br />
          <input name="password" placeholder="Password" className="email" />
          <div className="sign">
            <div className="remeber">Remember for 30 days.</div>
            <div className="remeber1">
              <a href="#.">Forgot Password</a>
            </div>
          </div>
          <Link to="/signupPage" className="secondbutton2">
            <button className="secondbutton">Sign Up</button>
          </Link>
        </div>
        <div className="imgdiv">
          <p className="pimg">Image</p>
        </div>
      </div>
    </>
  );
}
