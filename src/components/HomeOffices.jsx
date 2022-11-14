import React from "react";
import { Germany, Kuwait, map, Netherland, Pakistan } from "../assets";

export default function HomeOffices() {
  return (
    <div className="home__offices" style={{ marginTop: "7em" }}>
      <div className="home__offices__heading heading">Offices</div>
      <img src={map} alt="map" className="home__offices__img" />
      <div className="home__offices__content">
        <HomeOfficesEntry
          img={Pakistan}
          name="Pakistan"
          phone="+965 99100538"
          email="kw@aigron.com"
          address="Al-Farwaniya, Am Nimran Complex Habib Al-Munawar Street, Mezzanine 2, Office 5"
        />
        <HomeOfficesEntry
          img={Kuwait}
          name="Kuwait"
          phone="+965 99100538"
          email="kw@aigron.com"
          address="Al-Farwaniya, Am Nimran Complex Habib Al-Munawar Street, Mezzanine 2, Office 5"
        />
        <HomeOfficesEntry
          img={Germany}
          name="Germany"
          phone="+965 99100538"
          email="kw@aigron.com"
          address="Al-Farwaniya, Am Nimran Complex Habib Al-Munawar Street, Mezzanine 2, Office 5"
        />
        <HomeOfficesEntry
          img={Netherland}
          name="Netherland"
          phone="+965 99100538"
          email="kw@aigron.com"
          address="Al-Farwaniya, Am Nimran Complex Habib Al-Munawar Street, Mezzanine 2, Office 5"
        />
      </div>
    </div>
  );
}

function HomeOfficesEntry({ img, name, email, phone, address }) {
  return (
    <div className="home__offices__content__entry">
      <img
        src={img}
        alt={name}
        className="home__offices__content__entry__img"
      />
      <div className="home__offices__content__entry__heading">{name}</div>
      <div className="home__offices__content__entry__sub__heading">{phone}</div>
      <div className="home__offices__content__entry__sub__heading">{email}</div>
      <div className="home__offices__content__entry__info">{address}</div>
    </div>
  );
}
