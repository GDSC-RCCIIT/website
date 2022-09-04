import React from "react";
import HeroSection from "../../components/HeroSection";
import TitleCenter from "./components/TitleCenter";
import Card from "./components/Card";
import FaQ from "./components/FaQ";
import Footer from "../../components/Footer";

import "../Home/Home.css";
import { useDatabase } from "../../contexts/Database";
import { FadeIn } from "react-slide-fade-in";

export default function Home() {
  const { data } = useDatabase();

  if (data["home-page"] === undefined) {
    return <></>;
  }

  const techTitles = Object.keys(data["home-page"].technologies.data);
  const images = Object.values(data["home-page"].technologies.data);

  const cards = [];

  for (let i = 0; i < techTitles.length; i++) {
    cards.push(
      <div key={i} className="col-lg-6 col-xl-4 col-md-6 mx-auto">
        <FadeIn
          key={i}
          from="left"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={50}
        >
          <Card img={images[i]} tech_Name={techTitles[i]} />
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="container _shapeAnimation">
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={100}
        >
          <HeroSection
            {...{
              headline: `Google DSC ${data["chapter-name"]}`,
              description: data["home-page"]["intro"],
              imgStart: "",
              img: "https://firebasestorage.googleapis.com/v0/b/gdsc-rcciit-web.appspot.com/o/image_assets%2Fintro.png?alt=media&token=c60b8ac9-3f43-4a7c-806e-ac111c55f318",
              alt: "",
            }}
          />
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={50}
        >
          <HeroSection
            {...{
              headline: `Connect with us`,
              description: data["home-page"]["connect"],
              imgStart: "start",
              img: "https://firebasestorage.googleapis.com/v0/b/gdsc-rcciit-web.appspot.com/o/image_assets%2Fconnect.png?alt=media&token=51d2f2b1-38f3-499f-b48f-faab38d02bb1",
              alt: "",
            }}
          />
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={0}
        >
          <HeroSection
            {...{
              headline: `Join us`,
              description: data["home-page"]["join"],
              imgStart: "",
              img: "https://firebasestorage.googleapis.com/v0/b/gdsc-rcciit-web.appspot.com/o/image_assets%2Fjoin.png?alt=media&token=3993501e-7e1b-4117-a217-4354d12696f8",
              alt: "",
            }}
          />
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={0}
        >
          <HeroSection
            {...{
              headline: `Grow with us`,
              description: data["home-page"]["grow"],
              imgStart: "start",
              img: "https://firebasestorage.googleapis.com/v0/b/gdsc-rcciit-web.appspot.com/o/image_assets%2Fgrow.png?alt=media&token=2f5f0091-9bf8-478a-9aac-642ba289b45a",
              alt: "",
            }}
          />
        </FadeIn>
      </div>
      {/* techs */}
      <div className="tech_bg_color">
        <div className="container">
          <div className="text-center">
            <TitleCenter
              {...{
                title: data["home-page"]["technologies"]["title"],
                description: data["home-page"]["technologies"]["description"],
              }}
            />
          </div>
          <div className="row d-flex justify-content-center">{cards}</div>
        </div>
      </div>
      {/* faq */}
      <div className="tech_bg_color">
        <div className="text-center">
          <TitleCenter
            {...{
              ...{
                title: data["home-page"]["faq"]["title"],
                description: data["home-page"]["faq"]["description"],
              },
            }}
          />
          {}
        </div>
        <FaQ />
      </div>
      <Footer />
    </div>
  );
}
