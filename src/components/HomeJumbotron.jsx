import React from "react";
import { homeSectionBanner, homeSectionBg } from "../assets";

export default function HomeJumbotron() {
  const [showHomeSectionOverlay, setShowHomeSectionOverlay] =
    React.useState(false);
  return (
    <div className="home__section">
      {showHomeSectionOverlay ? (
        <>
          <img
            src={homeSectionBg}
            alt="homeSectionBg"
            className="home__section__img"
          />
          <div className="home__section__overlay">
            <div className="home__section__overlay__heading heading">
              Trusted partner for your <span>AI and Data projects</span>
            </div>
            <button
              onClick={() => {
                document
                  .getElementById("footer")
                  .scrollIntoView({ befavior: "smooth" });
              }}
              className="home__section__overlay__link"
            >
              Get in Touch
            </button>
          </div>
        </>
      ) : (
        <>
          <video
            src={homeSectionBanner}
            alt="homeSectionBanner"
            muted
            autoPlay
            className="home__section__video"
            onEnded={() => setShowHomeSectionOverlay(true)}
          />
          <div className="home__section__overlay" />
        </>
      )}
    </div>
  );
}
