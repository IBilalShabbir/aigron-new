import React from "react";
import { aboutusbanner, aboutusbannerlogo } from "../assets";

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
    </>
  );
}
