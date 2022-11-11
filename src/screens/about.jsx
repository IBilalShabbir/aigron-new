import React from "react";
import {
  aboutusbanner,
  aboutusbannerlogo,
  aboutusleft,
  aboutusfirstsection,
  aboutussecondsection,
  aboutusright,
} from "../assets";

export default function About() {
  return (
    <>
      <div className="aboutus__banner">
        <img src={aboutusbanner} alt="aboutusbanner" />
      </div>
      <div className="aboutus__banner__content">
        <div className="aboutus__banner__logo">
          <img src={aboutusbannerlogo} alt="aboutusbannerlogo" />
        </div>
        <button className="aboutus__banner__button">Let us support you</button>
      </div>
      <section className="aboutus__first__section">
        <div className="about__us__first__left">
          <img src={aboutusleft} alt="aboutusleft" />
        </div>
        <div className="about__us__first__right">
          <img src={aboutusfirstsection} alt="aboutusfirstsection" />
          <div className="about__us__first__right__content">
            <div className="about__us__first__right__content__heading">
              About Us
            </div>
            <div className="about__us__first__right__content__info">
              Aigron is an AI and Data consultancy, development and recruitment
              company founded by experts who are actively involved in the AI and
              Data domain. We are experienced with helping companies' businesses
              to the next level through digitalisation.
            </div>
          </div>
        </div>
        <div className="aboutus__second__section__right__one">
          <img src={aboutusleft} alt="aboutusright" />
        </div>
      </section>
      <section className="aboutus__second__section">
        <div className="about__us__first__left">
          <img
            className="about__us__first__left__two"
            src={aboutusleft}
            alt="aboutusleft"
          />
        </div>
        <div className="aboutus__second__section__left">
          <div className="aboutus__second__section__left__content">
            <div className="aboutus__second__section__left__content__heading">
              Mission & Vision
            </div>
            <div className="aboutus__second__section__left__content__info">
              Through Aigron we aim to be a dedicated partner for our customers
              to help them accelerate adoption of new technologies during the
              technical evolution, making it possible taking the next step in
              their businesses. We strongly believe AI and Data developments can
              contribute to a better and more sustainable world.
            </div>
          </div>
          <div className="aboutus__second__section__right">
            <img src={aboutussecondsection} alt="aboutussecondsection" />
          </div>
        </div>
        <div className="aboutus__second__section__right__two">
          <img src={aboutusleft} alt="aboutusright" />
        </div>
      </section>
    </>
  );
}
