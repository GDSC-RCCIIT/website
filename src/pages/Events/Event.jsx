import React from "react";
import EventsCard from "./components/EventsCard";
import Footer from "../../components/Footer";
import { useDatabase } from "../../contexts/Database";

export default function Event() {
  const { events } = useDatabase();

  if (events === undefined) {
    return (
      <div className="_message">
        <h6>No Events Available Right Now</h6>
      </div>
    );
  }

  const eventDetails = Object.values(events);

  const cards = [];

  for (let i = eventDetails.length - 1; i >= 0; i--) {
    cards.push(
      <EventsCard
        key={i}
        pic={eventDetails[i]["pic"]}
        eventOn={eventDetails[i]["date"]}
        eventName={eventDetails[i]["name"]}
        eventDesc={eventDetails[i]["desc"]}
        eventLink={eventDetails[i]["link"]}
        eventLocation={eventDetails[i]["location"]}
      />
    );
  }

  return (
    <div id="egg">
      <div className="container contact_container" id="star-five ">
        <h2 className="text-center custom_heading event_title">Our Events</h2>
        <div className="border_animation"></div>
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center ">
            {cards}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
