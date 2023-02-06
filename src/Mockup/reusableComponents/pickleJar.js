import React from "react";
import "../pickleHouse/pickleHouse.css";

export default function PickleJar(props) {
  return (
    <>
      <div className="upperdiv">
        <div>
          <img src={props.img} alt={props.alt} />
          <p>{props.content}</p>
          <button className="selectbutton">{props.btnname}</button>
        </div>
      </div>
    </>
  );
}
