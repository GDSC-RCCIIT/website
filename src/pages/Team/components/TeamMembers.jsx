import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { FadeIn } from "react-slide-fade-in";

const TeamMembers = (props) => {
  return (
    <FadeIn
    from="bottom"
            positionOffset={200}
            triggerOffset={0}
            delayInMilliseconds={20}
    >
      <div className="core_team_container">
        <div className="members_container">
          <img src={props.img} alt="" />
          <div className="member_details">
            <div className="d-flex justify-content-center">
              {props.Web && (
                <a className="team_social_media" href={props.Web} target="_black">
                  <FaGlobe className="icon" />
                </a>
              )}
              {props.Facebook && (
                <a className="team_social_media" href={`https://facebook.com/${props.Facebook}`} target="_black">
                  <FaFacebookF className="icon" />
                </a>
              )}
              {props.Twitter && (
                <a
                  className="team_social_media"
                  href={`https://twitter.com/${props.Twitter}`}
                  target="_black"
                >
                  <FaTwitter className="icon" />
                </a>
              )}
              {props.Instagram && (
                <a
                  className="team_social_media"
                  href={`https://instagram.com/${props.Instagram}`}
                  target="_black"
                >
                  <FaInstagram className="icon" />
                </a>
              )}
              {props.Github && (
                <a
                  className="team_social_media"
                  href={`https://github.com/${props.Github}`}
                  target="_black"
                >
                  <FaGithub className="icon" />
                </a>
              )}
              {props.Linkedin && (
                <a
                  className="team_social_media"
                  href={`https://linkedin.com/in/${props.Linkedin}`}
                  target="_black"
                >
                  <FaLinkedin className="icon" />
                </a>
              )}
            </div>
            <h4>{props.name}</h4>
            <p>{props.position}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default TeamMembers;
