import React from "react";
import { FadeIn } from "react-slide-fade-in";
import Footer from "../../components/Footer";
import { useDatabase } from "../../contexts/Database";
import "../Home/Home.css";
import SpeakersCard from "./components/SpeakersCard";

export default function Speakers() {
  const { speakers } = useDatabase();

  if (speakers.length === 0) {
    return <></>;
  }

  const speakersList = [];

  for (let i = 0; i < speakers.length; i++) {
    speakersList.push(
      <FadeIn
        key={i}
        from="bottom"
        positionOffset={200}
        triggerOffset={0}
        delayInMilliseconds={50}
      >
        <SpeakersCard
          name={speakers[i]["name"]}
          image={speakers[i]["image"]}
          bio={speakers[i]["bio"]}
          facebook={speakers[i]["socialLinks"]["facebook"]}
          linkedin={speakers[i]["socialLinks"]["linkedin"]}
          github={speakers[i]["socialLinks"]["github"]}
          twitter={speakers[i]["socialLinks"]["twitter"]}
          medium={speakers[i]["socialLinks"]["medium"]}
          instagram={speakers[i]["socialLinks"]["instagram"]}
          web={speakers[i]["socialLinks"]["web"]}
        />
      </FadeIn>
    );
  }

  return (
    <div id="egg">
      <div className="container" id="star-five ">
        <h2 className="text-center custom_heading speakers_page_title">
          Our Speakers
        </h2>
        <div className="border_animation"></div>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap">{speakersList}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
