import React from "react";
import "../components/TitleCenter.css";

export default function TitleCenter({ title, description }) {
  return (
    <React.Fragment>
      <div>
        <h1 className="_title">{title}</h1>
        <div className="border_animation"></div>
        <p className="_desc">{description}</p>
      </div>
    </React.Fragment>
  );
}
