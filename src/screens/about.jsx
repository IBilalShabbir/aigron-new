import React from "react";
import { aboutUsImage, missionAndVision } from "../assets";

export default function About() {
  return (
    <>
      <div className="about__home__section"></div>
      <div className="about__details__section">
        <div className="about__details__section__content">
          <div className="about__details__section__content__top">
            <div className="about__details__section__content__top__left">
              <img
                src={aboutUsImage}
                alt="aboutUsImage"
                className="about__details__section__content__top__left__img"
              />
            </div>
            <div className="about__details__section__content__top__right">
              <div className="about__details__section__content__top__right__heading heading">
                About Us
              </div>
              <div className="about__details__section__content__top__right__info">
                Aigron is an AI and Data consultancy, development and
                recruitment company founded by experts who are actively involved
                in the AI and Data domain. We are experienced with helping
                companies' businesses to the next level through digitalisation.
              </div>
            </div>
          </div>
          <div className="about__details__section__content__bottom">
            <div className="about__details__section__content__bottom__left">
              <div className="about__details__section__content__bottom__left__heading heading">
                Mission & Vision
              </div>
              <div className="about__details__section__content__bottom__left__info">
                Through Aigron we aim to be a dedicated partner for our
                customers to help them accelerate adoption of new technologies
                during the technical evolution, making it possible taking the
                next step in their businesses. We strongly believe AI and Data
                developments can contribute to a better and more sustainable
                world.
              </div>
            </div>
            <div className="about__details__section__content__bottom__right">
              <img
                src={missionAndVision}
                alt="missionAndVision"
                className="about__details__section__content__bottom__right__img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
