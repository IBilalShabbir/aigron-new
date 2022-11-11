import React from "react";
import {
  hiringMotivation,
  recruitmentAbout,
  recruitmentHomeBg,
} from "../assets";

export default function Recruitment() {
  return (
    <>
      <div className="jumbotron">
        <img
          src={recruitmentHomeBg}
          alt="recruitmentHomeBg"
          className="jumbotron__img"
        />
        <div className="jumbotron__overlay">
          <div className="jumbotron__overlay__heading">Recruitment</div>
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
      <div className="about__details__section about__details__section__reverse">
        <div className="about__details__section__content">
          <div className="about__details__section__content__bottom">
            <div className="about__details__section__content__bottom__left">
              <div className="about__details__section__content__bottom__left__heading about__details__section__content__bottom__left__heading__reverse heading">
                Expand your developoment capabilities by hiring the right AI and
                Data candidate for your organization
              </div>
              <div className="about__details__section__content__bottom__left__info">
                With our recruitment services we can find you the the right
                candidates from our wide network of professionals who will
                become an intergral part of your team. We carefully select the
                professional based on the requirements and expertise you need.
              </div>
            </div>
            <div className="about__details__section__content__bottom__right">
              <img
                src={recruitmentAbout}
                alt="recruitmentAbout"
                className="about__details__section__content__bottom__right__img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="recruitment__img__wrapper">
        <img
          src={hiringMotivation}
          alt="hiringMotivation"
          className="recruitment__img"
        />
      </div>
    </>
  );
}
