import React from "react";
import { careerHomeSectionBg } from "../assets";

export default function Career() {
  const [file, setFile] = React.useState(null);
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
      <div className="career__details">
        <div className="career__details__form">
          <div className="career__details__form__heading heading">
            Want to become part of the Aigron family?
          </div>
          <div className="career__details__form__info">
            Get in touch for our latest job openings.
          </div>
          <div className="career__details__form__row">
            <div className="career__details__form__row__entry">
              <input
                type="text"
                placeholder="Name"
                className="career__details__form__row__entry__field"
              />
            </div>
            <div className="career__details__form__row__entry">
              <input
                type="text"
                placeholder="Surname"
                className="career__details__form__row__entry__field"
              />
            </div>
          </div>
          <div className="career__details__form__row">
            <div className="career__details__form__row__entry">
              <input
                type="email"
                placeholder="Email"
                className="career__details__form__row__entry__field"
              />
            </div>
            <div className="career__details__form__row__entry">
              <input
                type="tel"
                placeholder="Mobile"
                className="career__details__form__row__entry__field"
              />
            </div>
          </div>
          <div className="career__details__form__row">
            <div className="career__details__form__row__entry">
              <input
                type="text"
                placeholder="LinkedIn"
                className="career__details__form__row__entry__field"
              />
            </div>
            <div className="career__details__form__row__entry">
              <div className="career__details__form__row__entry__file">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="career__details__form__row__entry__file__input"
                />
                <div className="career__details__form__row__entry__file__content">
                  {file === null ? (
                    <div className="career__details__form__row__entry__file__content__empty">
                      <div className="career__details__form__row__entry__file__content__empty__icon">
                        +
                      </div>
                      <div className="career__details__form__row__entry__file__content__empty__text">
                        Upload your CV
                      </div>
                    </div>
                  ) : (
                    <div className="career__details__form__row__entry__file__content__uploaded">
                      <div className="career__details__form__row__entry__file__content__uploaded__extension">
                        PDF
                      </div>
                      <div className="career__details__form__row__entry__file__content__uploaded__name">
                        document.pdf
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="career__details__form__button">Apply now</button>
        </div>
      </div>
    </>
  );
}
