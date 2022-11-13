import React from "react";
import { howWeWork, softwareDevelopment } from "../assets";

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
      <div className="recruitment__img__wrapper">
        <img src={howWeWork} alt="howWeWork" className="recruitment__img" />
      </div>
    </>
  );
}
