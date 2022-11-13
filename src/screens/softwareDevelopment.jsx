import React from "react";
import {
  howWeWork,
  softwareDevelopment,
  softwareDevelopmentabout,
  softwareDevelopmentimg,
} from "../assets";

export default function SoftwareDevelopment() {
  return (
    <>
      <div className="jumbotron">
        <img
          src={softwareDevelopment}
          alt="softwareDevelopment"
          className="jumbotron__img"
        />
        <div className="jumbotron__overlay">
          <div className="jumbotron__overlay__heading">
            Software Development
          </div>
          <div className="jumbotron__overlay__sub__heading">
            Fill your open position with <span>Professionals</span>
          </div>
          <button
            onClick={() => {
              document
                .getElementById("footer")
                .scrollIntoView({ befavior: "smooth" });
            }}
            className="jumbotron__overlay__button"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="software__development">
        <img
          src={softwareDevelopmentimg}
          alt="softwareDevelopmentimg"
          className="software__development__img"
        />
      </div>
      <div className="software__development__about">
        <div className="software__development__about__text">
          <div className="software__development__about__text__info">
            Aigron transforms business ideas in digital solutions with the help
            of the best available software professionals. Simply share your AI
            or data needs and we get it done. Taking the process of software
            development out of your hands? Look no further. We analyze, design
            and develop digital products for all your business challenges.
            Guiding you to an optimal solution.
          </div>
          <div className="software__development__about__text__heading">
            Aigron, for an optimal transformation of all your AI or data
            software development needs.
          </div>
        </div>
        <img
          src={softwareDevelopmentabout}
          alt="softwareDevelopmentabout"
          className="software__development__about__img"
        />
      </div>
      <div className="recruitment__img__wrapper">
        <img src={howWeWork} alt="howWeWork" className="recruitment__img" />
      </div>
    </>
  );
}
