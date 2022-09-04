import React from "react";
import "../Event.css";

export default function EventsCard(props) {
  return (
    <div className="event_container col-sm-12 col-xl-5">
      <img src={props.pic} alt={props.eventName} />
      <div className="event_details">
        <div className="row">
          <div className="col-xl-12">
            <a
              className="link"
              href={props.eventLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{props.eventName}</h3>
            </a>
            <h5>{props.eventDesc}</h5>
          </div>
        </div>
      </div>
      <div className="event_location">
        <p>
          <img
            src="https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png"
            alt=""
          />
          {props.eventLocation}
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          On : {props.eventOn}
        </p>
      </div>
    </div>
  );
}
