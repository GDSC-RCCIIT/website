import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FadeIn } from "react-slide-fade-in";
import { useDatabase } from "../../../contexts/Database";
import "../Home.css";

const FaQ = () => {
  const { data } = useDatabase();

  const questions = Object.keys(data["home-page"]["faq"]["data"]);
  const answers = Object.values(data["home-page"]["faq"]["data"]);

  const faqs = [];

  for (let i = 0; i < questions.length; i++) {
    faqs.push(
      <div key={i}>
        <AccordionItem>
          <FadeIn
            from="right"
            positionOffset={200}
            triggerOffset={0}
            delayInMilliseconds={50}
          >
            <AccordionItemHeading className="_accordion__button">
              <AccordionItemButton>{questions[i]}</AccordionItemButton>
            </AccordionItemHeading>
          </FadeIn>
          <AccordionItemPanel>
            <p className="accordion-content">{answers[i]}</p>
          </AccordionItemPanel>
        </AccordionItem>
      </div>
    );
  }

  return (
    <div className="container faq_container ">
      <div className="faq_content">
        <Accordion allowZeroExpanded={true}>{faqs}</Accordion>
      </div>
    </div>
  );
};

export default FaQ;
