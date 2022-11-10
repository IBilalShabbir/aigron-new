import React from "react";
import { frame } from "../assets";

export default function Career() {
  return (
    <>
      <div className="career__section">
        <div className="career__section__img">
          <img className="career__section__image" src={frame} alt="" />
        </div>
        <div className="career__section__overlay">
          <div className="career__section__overlay__text">
            Want to become part of the Aigron family?
          </div>
          <div className="career__section__overlay__heading">
            Get in touch for our latest job openings.
          </div>
          <div className="career__section__overlay__input">
            <div className="career__section__overlay__input__button">
              <input type="Name" placeholder="Name" />
            </div>
            <div className="career__section__overlay__input__button">
              <input type="Name" placeholder="Surename" />
            </div>
            <div className="career__section__overlay__input__button">
              <input type="email" placeholder="Email" />
            </div>
            <div className="career__section__overlay__input__button">
              <input type="number" placeholder="Mobile" />
            </div>
            <div className="career__section__overlay__input__button">
              <input type="url" placeholder="Linkedin" name="" id="" />
            </div>
          </div>
          <div className="career__section__overlay__apply__button">Apply</div>
        </div>
      </div>
    </>
  );
}
