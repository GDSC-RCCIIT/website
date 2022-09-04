import React from "react";
import "../../Speakers/Speakers.css";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaMedium,
  FaGlobe,
} from "react-icons/fa";

export default function SpeakersCard(props) {
  return (
    <div className="speaker_container">
      <img src={props.image} alt={props.name} />
      <p className="speaker_name">{props.name}</p>
      <p className="speaker_bio">{props.bio}</p>
      <div className="d-flex justify-content-center">
        {props.facebook && (
          <a
            className="team_social_media"
            href={`https://facebook.com/${props.Facebook}`}
            target="_black"
          >
            <FaFacebookF className="icon" />
          </a>
        )}
        {props.twitter && (
          <a className="team_social_media" href={props.twitter} target="_black">
            <FaTwitter className="icon" />
          </a>
        )}
        {props.instagram && (
          <a
            className="team_social_media"
            href={props.instagram}
            target="_black"
          >
            <FaInstagram className="icon" />
          </a>
        )}
        {props.github && (
          <a className="team_social_media" href={props.github} target="_black">
            <FaGithub className="icon" />
          </a>
        )}
        {props.linkedin && (
          <a
            className="team_social_media"
            href={props.linkedin}
            target="_black"
          >
            <FaLinkedin className="icon" />
          </a>
        )}
        {props.medium && (
          <a className="team_social_media" href={props.medium} target="_black">
            <FaMedium className="icon" />
          </a>
        )}
        {props.web && (
          <a className="team_social_media" href={props.web} target="_black">
            <FaGlobe className="icon" />
          </a>
        )}
      </div>
    </div>
  );
}
