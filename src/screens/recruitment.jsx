import React from "react";
import { recruitmentHomeBg } from "../assets";

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
    </>
  );
}
