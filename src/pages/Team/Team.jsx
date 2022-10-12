import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Footer from "../../components/Footer";
import { useDatabase } from "../../contexts/Database";
import "../Team/Team.css";
import TeamMembers from "./components/TeamMembers";

export default function Team() {
  const { data } = useDatabase();

  if (data.team === undefined || data.prevTeams === undefined) {
    return <></>;
  }

  const members = Object.keys(data.team);
  const memberDetails = Object.values(data.team);
  const otherMembers = Object.keys(data.other_members);
  const otherMemberDetails = Object.values(data.other_members);

  //team members list to be displayed
  const team = [];
  //team lead and faculty advisors list to be displayed
  const teamLead = [];
  //other members list to be displayed
  const otherMembersList = [];

  const prevTeamsYears = Object.keys(data.prevTeams);
  const prevTeamsDetails = Object.values(data.prevTeams);

  const prevTeamsList = [];

  for (let i = 0; i < prevTeamsYears.length; i++) {
    const currentPrevYearTeamMemberNames = Object.keys(prevTeamsDetails[i]);
    const currentPrevYearTeamMemberDetails = Object.values(prevTeamsDetails[i]);

    const currentPrevYearTeam = [];

    for (let j = 0; j < currentPrevYearTeamMemberNames.length; j++) {
      currentPrevYearTeam.push(
        <TeamMembers
          key={3000 + j}
          img={currentPrevYearTeamMemberDetails[j].img}
          name={currentPrevYearTeamMemberNames[j]}
          position={currentPrevYearTeamMemberDetails[j].position}
          Linkedin={currentPrevYearTeamMemberDetails[j].linkedin}
        />
      );
    }

    prevTeamsList.push(
      <div key={1000 + i} className="mx-5">
        <Accordion className="mt-5 w-100" allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading className="_accordion__button">
              <AccordionItemButton>
                {`Team 20${prevTeamsYears[i]}`}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="accordion-content">
                <div className="d-flex flex-wrap justify-content-center custom_member">
                  {currentPrevYearTeam}
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  for (let i = 0; i < members.length; i++) {
    if (!memberDetails[i].top) {
      team.push(
        <TeamMembers
          key={i}
          img={memberDetails[i].img}
          name={members[i]}
          position={memberDetails[i].position}
          Facebook={memberDetails[i].Facebook}
          Twitter={memberDetails[i].Twitter}
          Instagram={memberDetails[i].Instagram}
          Github={memberDetails[i].Github}
          Linkedin={memberDetails[i].Linkedin}
          Web={memberDetails[i].Web}
        />
      );
    } else {
      teamLead.push(
        <TeamMembers
          key={i}
          img={memberDetails[i].img}
          name={members[i]}
          position={memberDetails[i].position}
          Facebook={memberDetails[i].Facebook}
          Twitter={memberDetails[i].Twitter}
          Instagram={memberDetails[i].Instagram}
          Github={memberDetails[i].Github}
          Linkedin={memberDetails[i].Linkedin}
          Web={memberDetails[i].Web}
        />
      );
    }
  }

  for (let i = 0; i < otherMembers.length; i++) {
    otherMembersList.push(
      <TeamMembers
        key={100 + i}
        img={otherMemberDetails[i].img}
        name={otherMembers[i]}
        position={otherMemberDetails[i].position}
        Facebook={otherMemberDetails[i].Facebook}
        Twitter={otherMemberDetails[i].Twitter}
        Instagram={otherMemberDetails[i].Instagram}
        Github={otherMemberDetails[i].Github}
        Linkedin={otherMemberDetails[i].Linkedin}
        Web={otherMemberDetails[i].Web}
      />
    );
  }

  return (
    <div id="egg">
      <div className="contact_container" id="star-five ">
        <h4 className="text-center custom_heading">Management</h4>
        <div className="border_animation"></div>
        <div className="d-flex flex-wrap justify-content-center">{teamLead}</div>
        <br></br>
        <h4 className="text-center custom_heading">Core Team</h4>
        <div className="border_animation"></div>
        <div className="d-flex flex-wrap justify-content-center custom_member">{team}</div>
        <br></br>
        <h4 className="text-center custom_heading">Other members</h4>
        <div className="border_animation"></div>
        <div className="d-flex flex-wrap justify-content-center custom_member">
          {otherMembersList}
        </div>
        {prevTeamsList}
      </div>
      <Footer />
    </div>
  );
}
