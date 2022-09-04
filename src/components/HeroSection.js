import React from "react";
import "./HeroSection.css";

function HeroSection({ headline, description, imgStart, img, alt }) {
  return (
    <>
      <div className="home__hero-section _container">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className="heading">{headline}</h1>
                <div className="border_animation ml-0"></div>
                <p className="home__hero-subtitle">{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
