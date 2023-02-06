import React from "react";
import "../pickleHouse/pickleHouse.css";
export default function Text(props) {
  return (
    <>
      {props.number}
      <p className="heading">
        <div className="number"> {props.numb}</div>
        {props.heading}
      </p>

      <p className="para">{props.dummy}</p>
    </>
  );
}
