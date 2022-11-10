import React, { useLayoutEffect, useState } from "react";
import Nav from "./Nav";
import { Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { react } from "../assets";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  useLayoutEffect(() => {
    function navStatus() {
      if (window.innerWidth < 1000) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    }
    navStatus();
    window.addEventListener("resize", navStatus);
  }, []);
  return (
    <div className="header">
      <div className="header__container">
        <button className="header__logo" to="/">
          <img src={react} alt="react" />
        </button>
        <OutsideClickHandler
          onOutsideClick={() => {
            if (window.innerWidth < 1000) {
              setIsNavOpen(false);
            }
          }}
        >
          <div>
            {isNavOpen ? (
              <Nav navigate={navigate} setIsNavOpen={setIsNavOpen} />
            ) : null}
          </div>
        </OutsideClickHandler>
        <div className="header__buttons">
          <div className="menu__btn" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? (
              <X color="white" size={30} />
            ) : (
              <Menu color="white" size={30} />
            )}
          </div>
          <div className="header__buttons__entries">
            <button className="header__button__get__in__touch">
              Get in Touch
            </button>
            <select name="" id="" className="header__dropdown">
              <option value="">Eng</option>
              <option value="dog">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
