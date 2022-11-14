import React from "react";
import {
  Automotive,
  Energy,
  Fintech,
  Healthcare,
  HighTech,
  Logistics,
  OilGas,
  sustainabilityBanner,
  Telecom,
} from "../assets";

export default function HomeIndustries() {
  return (
    <div className="home__industries">
      <div className="home__industries__heading heading">Industries</div>
      <div className="home__industries__content">
        <div className="home__industries__content__entry">
          <img
            src={Logistics}
            alt="Logistics"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Logistics
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={Energy}
            alt="Energy"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Energy
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={HighTech}
            alt="HighTech"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              High Tech
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={Telecom}
            alt="Telecom"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Telecom
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry__main">
          <img
            src={sustainabilityBanner}
            alt="Sustainability"
            className="home__industries__content__entry__main__img"
          />
          <div className="home__industries__content__entry__main__content">
            <div className="home__industries__content__entry__main__content__heading">
              Sustainability
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={Fintech}
            alt="Fintech"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Fintech
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={Healthcare}
            alt="Healthcare"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Healthcare
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={Automotive}
            alt="Automotive"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Automotive
            </div>
          </div>
        </div>
        <div className="home__industries__content__entry">
          <img
            src={OilGas}
            alt="OilGas"
            className="home__industries__content__entry__img"
          />
          <div className="home__industries__content__entry__content">
            <div className="home__industries__content__entry__content__heading">
              Oil & Gas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
