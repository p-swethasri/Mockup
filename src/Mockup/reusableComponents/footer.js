import React from "react";
import SocialMedia from "../Asserts/20-social-media-icons.png";
import "./footer.css";
import Place from "../Asserts/place.png";
import Phone from "../Asserts/phone-call (1).png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="firstdiv1">
          <div>
            <p className="Register">Registered Office</p>
          </div>
          <div className="display">
            <div style={{ width: "24%" }}>
              <div className="place">
                <img src={Place} alt="place" className="placeimg" />
              </div>
            </div>
            <div className="con">
              <p className="par">
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
            </div>
          </div>

          <div className="display">
            <div style={{ width: "24%" }}>
              <div className="place">
                <img src={Phone} alt="phone" className="placeimg" />
              </div>
            </div>
            <div className="con">
              <p className="par1">040 - 456 789 000</p>
            </div>
          </div>
          <div className="display">
            <div style={{ width: "24%" }}>
              <div className="place">
                <img src={Place} alt="place" className="placeimg" />
              </div>
            </div>
            <div className="con">
              <p className="par1">picklehouse@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="seconddiv1">
          <div>
            <div>
              <p className="Register1">Useful Links</p>
            </div>

            <div className="ab">About Us</div>
            <div className="aab">Terms and Conditions</div>
            <div className="aab">Privacy and Policy</div>
            <div className="aab">Return and Cancellation & Refund Policy</div>
            <div className="aab">Shipping and Delivery Policy</div>
          </div>
        </div>
        <div className="thirddiv">
          <p className="Register1">Get Connected</p>
          <div className="limgdiv">
            <img
              src={SocialMedia}
              alt="Socialmedia icons"
              className="socialimg"
            />
          </div>
        </div>
      </div>
      <hr className="hstyle" />
      <div>
        <p className="picklehouse">@PICKLEHOUSE, All Right Reserved 2022</p>
      </div>
    </>
  );
}
