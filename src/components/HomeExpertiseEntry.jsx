import React from "react";

export function HomeExpertiseEntry({ icon, heading, info }) {
  return (
    <section
      id={heading}
      className="home__expertise__content__main__entry"
      onClick={() => {
        document
          .getElementById("footer")
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      {icon}
      <div className="home__expertise__content__main__entry__content">
        <div className="home__expertise__content__main__entry__content__heading">
          {heading}
        </div>
        <div className="home__expertise__content__main__entry__content__info">
          {info}
        </div>
        <a className="home__expertise__content__main__entry__content__link">
          Learn more
        </a>
      </div>
    </section>
  );
}
