import React from "react";

export function NavlinkEntry({ children, navigate, to }) {
  return (
    <div className="navlink__entry">
      <input
        type="radio"
        className="navlink__entry__input"
        name="navlink__entry"
        title={children}
        id={children}
        onClick={() => {
          navigate(to);
        }}
      />
      <div className="navlink__entry__input__label">{children}</div>
    </div>
  );
}
