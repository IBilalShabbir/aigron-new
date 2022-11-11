import React from "react";
import { careerHomeSectionBg } from "../assets";

export default function Career() {
  return (
    <>
      <div className="career__home__section">
        <img
          src={careerHomeSectionBg}
          alt="careerHomeSectionBg"
          className="career__home__section__img"
        />
        <div className="career__home__section__overlay heading">Career</div>
      </div>
    </>
  );
}
