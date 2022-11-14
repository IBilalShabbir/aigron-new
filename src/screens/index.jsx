import React from "react";
import {
  HomeAbout,
  HomeJumbotron,
  HomeServices,
  HomeExpertise,
  // HomeIndustries,
  HomeOffices,
} from "components";

export default function index() {
  return (
    <>
      <HomeJumbotron />
      <HomeAbout />
      <HomeServices />
      <HomeExpertise />
      {/* <HomeIndustries /> */}
      <HomeOffices />
    </>
  );
}
