import React from "react";
import { Link } from "react-router-dom";
import User from "../Asserts/user.png";
import enter from "../Asserts/enter.png";
import Down from "../Asserts/down.png";
import Search from "../Asserts/search (1).png";
import Heart from "../Asserts/heart (2).png";
import Before from "../Asserts/before-after.png";
import Bag from "../Asserts/bag.png";
import Menu from "../Asserts/menu.png";
import "../pickleHouse/pickleHouse.css";

export default function Header() {
  return (
    <>
      <div className="tophead">
        <div className="leftpart">FREE SHIPPING FOR ALL ORDERS OF 150/-</div>
        <div className="rightpart">
          <div>
            <img src={User} alt="user" className="user" />
          </div>
          <div style={{ paddingRight: "10px" }}>My Account</div>|
          <div>
            <img src={enter} alt="enterimg" className="entering" />
          </div>
          <div>Login/Register</div>
        </div>
      </div>
      <div className="seconddiv">
        <div style={{ width: "30%" }}>
          <div className="rectangle">
            <p style={{ marginTop: "10px" }}>LOGO</p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="buttonmodel">
            <div className="sproducts">Search for Products</div>
            <div className="scate">Select Category</div>
            <img src={Down} alt="downimg" className="down" />
            <img src={Search} alt="search" className="searchimg" />
          </div>
        </div>
        <div className="lastdiv">
          <img src={Heart} alt="downimg" className="down" />
          <img src={Before} alt="downimg" className="down" />
          <img src={Bag} alt="downimg" className="down" />
          300.00/-
        </div>
      </div>
      <div className="header">
        <div style={{ width: "25%", marginleft: "20px" }}>
          <p className="brouse">
            <img src={Menu} alt="menu" className="down1" />
            Brouse Categories
            <img src={Down} alt="down" className="down1" />
          </p>
        </div>

        <div className="thirdheader">
          <p className="home">
            <Link to="/signupPage" className="products">
              Home
            </Link>
          </p>
          <p className="home">
            <Link to="/pickleHouse/pickleHouse" className="products">
              About Us
            </Link>
          </p>
          <p className="home">
            <Link to="/pickleHouse/Products" className="products">
              Products
            </Link>
          </p>
          <p className="home">Exports</p>
          <p className="home">
            <Link to="/Cart/Cart" className="products">
              Blogs
            </Link>
          </p>
          <p className="home">Contact Us</p>
        </div>
        <div style={{ width: "25%", marginRight: "20px" }}>
          <div className="special">SPECIAL OFFERS </div>
        </div>
      </div>
    </>
  );
}
