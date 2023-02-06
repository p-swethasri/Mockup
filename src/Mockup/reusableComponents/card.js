import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt={props.alt} />
        <hr className="hrstyle" />
        <p style={{ margin: "0px" }}>{props.content}</p>
        <p>{props.amount}</p>
        <button className="selectbutton">{props.btnname}</button>
      </div>
    </>
  );
}
