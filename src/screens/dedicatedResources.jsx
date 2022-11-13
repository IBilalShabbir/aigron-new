import React from "react";
import {
  dedicatedResourcesAbout,
  dedicatedResourcesAboutBg,
  dedicatedResourcesBg,
  hiringProcess,
} from "../assets";

export default function DedicatedResources() {
  return (
    <>
      <div className="jumbotron">
        <img
          src={dedicatedResourcesBg}
          alt="dedicatedResourcesBg"
          className="jumbotron__img"
        />
        <div className="jumbotron__overlay">
          <div className="jumbotron__overlay__content">
            <div className="jumbotron__overlay__heading">
              Hire Dedicated Resources
            </div>
            <div className="jumbotron__overlay__sub__heading">
              Fill your open position with <span>Professionals</span>
            </div>
            <button
              onClick={() => {
                docmment
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="jumbotron__overlay__button"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      <div className="hiring__about">
        <img
          src={dedicatedResourcesAboutBg}
          alt="dedicatedResourcesAboutBg"
          className="hiring__about__img"
        />
      </div>
      <div className="hiring__about__details">
        <img
          src={dedicatedResourcesAbout}
          alt="dedicatedResourcesAbout"
          className="hiring__about__details__img"
        />
        <div className="hiring__about__details__text">
          <div className="hiring__about__text__top">
            Aigron can match you with our best talents,delivering high quality
            software solutions.Hire dedicated software professionals to
          </div>
          <div className="hiring__about__text__bottom">
            An option is also to hire professionals remotely from one of
            ourglobal offices. Saving you valuable time and cost in putting
            together the best team. With time tracking and frequent online or
            even in-person meeting options, giving you more flexibility and an
            effective collaboration. Choosing Aigron is your best choice towards
            an efficient and economical hiring of your software needs.
          </div>
          <button className="hiring__about__button">Get in touch</button>
        </div>
      </div>
      <div className="hiring__process">
        <div className="hiring__process__heading">Aigron Hiring Process</div>
        <div className="hiring__process__subheading">
          Developing your AI or data software development in just 4 simple steps
        </div>
        <div
          className="recruitment__img__wrapper"
          style={{ margin: "0em auto" }}
        >
          <img
            src={hiringProcess}
            alt="hiringProcess"
            className="recruitment__img"
          />
        </div>
      </div>
    </>
  );
}
