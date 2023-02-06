import React from "react";
import "./signupPage.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export default function Signup() {
  return (
    <>
      <div className="sign">
        <div className="firstdiv">
          <h1 className="h1s">Welcome back,Olivia</h1>
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
          <input name="email" placeholder="Email" className="email" />
          <br />
          <input name="password" placeholder="Password" className="email" />
          <div className="sign">
            <div className="remeber">
              <input type="checkbox" />
              Remember for 30 days.
            </div>
            <div className="remeber1">
              <a href="#.">Forgot Password</a>
            </div>
          </div>

          <Link to="/pickleHouse/pickleHouse" className="secondbutton2">
            <button className="secondbutton">Login</button>
          </Link>

          <div className="account">
            Don't have an account?
            <div>
              <Link to={"/createAccount"} className="sign2">
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
        <div className="imgdiv">
          <p className="pimg">Image</p>
        </div>
      </div>
    </>
  );
}
