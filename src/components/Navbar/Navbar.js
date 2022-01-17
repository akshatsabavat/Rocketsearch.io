import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.scss";

export default function Navbar() {
  return (
    <div className="NavigationComponent">
      <Link className="NavigationComponent__Link" to="/">
        <p className="NavigationComponent__Link__Logo">Rocketsearch.io</p>
      </Link>
      <button className="NavigationComponent__ThemeButton">Dark</button>
    </div>
  );
}
