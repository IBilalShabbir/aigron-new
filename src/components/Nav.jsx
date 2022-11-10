import React from "react";
import { NavlinkEntry } from "./NavlinkEntry";

export default function Nav({ navigate, setIsNavOpen }) {
  return (
    <div className="header__links">
      <NavlinkEntry setIsNavOpen={setIsNavOpen} navigate={navigate} to="/">
        Services
      </NavlinkEntry>
      <NavlinkEntry setIsNavOpen={setIsNavOpen} navigate={navigate} to="/">
        Expertise
      </NavlinkEntry>
      <NavlinkEntry setIsNavOpen={setIsNavOpen} navigate={navigate} to="/">
        Company
      </NavlinkEntry>
    </div>
  );
}
