import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/dsc_logo.png";
import "../pages/Home/Home.css";
import { useDatabase } from "../contexts/Database";
import { FadeIn } from "react-slide-fade-in";

const Footer = () => {
  const { data } = useDatabase();

  if (data["footer"] === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="container-fluid footer_bg">
        <div className="container footer">
          <FadeIn
            from="bottom"
            positionOffset={200}
            triggerOffset={0}
            delayInMilliseconds={20}
          >
            <Link to="/" className="link logo_img_">
              <img src={logo} alt="logo" />
              <h1 className="text-center logo">{`GDSC ${data["chapter-name"]}`}</h1>
            </Link>
          </FadeIn>
          <FadeIn
            from="right"
            positionOffset={200}
            triggerOffset={0}
            delayInMilliseconds={20}
          >
            <div className="d-flex justify-content-center">
              <a
                className="social_media"
                href={data["footer"]["twitter"]}
                target="_black"
              >
                <FaTwitter className="icon" />
              </a>
              <a
                className="social_media"
                href={data["footer"]["linkedin"]}
                target="_black"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                className="social_media"
                href={data["footer"]["instagram"]}
                target="_black"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                className="social_media"
                href={data["footer"]["github"]}
                target="_black"
              >
                <FaGithub className="icon" />
              </a>
            </div>
          </FadeIn>
        </div>
        <p className="w-100 text-center">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by{" "}
          <a
            className="contact_anchor"
            href="https://github.com/GDSC-RCCIIT/website"
          >
            GDSC RCCIIT
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
