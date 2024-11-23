import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";
//infoBox :accepts props for text content, a link destination, and the button text
//Utilizes the Link component from react-router-dom for navigation within the application.
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="an-arrow-icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  //each stage has its own texture and information
  //stages are from 1 to 4 changing as we rotate the island
  1: (
    <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-tan py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ahmed</span>
      <br />A Software Engineering Student  from Tunisia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects and picked up my skills along the way"
      link="/About"
      btnText="Learn more "
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years .Curious about the impact ? "
      link="/Projects"
      btnText="visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev ? I'm just few keystrokes away "
      link="/Contact"
      btnText="Let's talk "
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  //  Renders content based on the currentStage
  // returns null if the stage is undefined.
  return renderContent[currentStage] || null;
};

export default HomeInfo;
