import React from "react";
import Footer from "../../components/Footer";

import "../Home/Home.css";
import "./Contact.css";
import { useDatabase } from "../../contexts/Database";
import { FadeIn } from "react-slide-fade-in";

export default function Contact() {
  const { data } = useDatabase();

  if (data["chapter-email"] === undefined) {
    return <></>;
  }

  return (
    <div id="egg">
      <div className="container contact_container" id="star-five ">
        <h2 className="text-center custom_heading">Lets Talk</h2>
        <div className="border_animation"></div>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={50}
        >
          <div className="row">
            <div className="col-lg-6">
              <img
                style={{ marginLeft: "180px", height: "256px" }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/gdsc-rcciit-web.appspot.com/o/image_assets%2Fcontact.png?alt=media&token=bfc4046f-fa5f-455c-8237-bf3b099d7b50"
                }
                alt=""
              />
            </div>
            <div className="contact_right col-lg-6">
              <p>Would you like to sponsor an event? Get in touch with us!</p>
              <br></br>
              <p>
                Reach out to us at{" "}
                <a
                  className="contact_anchor"
                  href={`mailto:${data["chapter-email"]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data["chapter-email"]}
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
        <h2 className="text-center custom_heading">Visit Us</h2>
        <div className="border_animation"></div>
        <div className="d-flex justify-content-center container custom__card">
          <div
            className="col-lg col-sm-12 card__container"
            style={{ padding: "0px" }}
          >
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5302903644642!2d88.39421591549893!3d22.559261585189656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027686b848fb8d%3A0xed09795e4836e886!2sRCC%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1662194840150!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                borderRadius: "15px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
