import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card_container">
      <div className="card_content">
        <img src={props.img} alt="" />
        <h2>{props.tech_Name}</h2>
      </div>
    </div>
  );
}
