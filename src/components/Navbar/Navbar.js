import React from "react";
import { Link } from "react-router-dom";
import EngineLogo from "../../Assets/SearchEngineIcon.svg";
import "../Navbar/Navbar.scss";
import Search from "../Search/Search";
//branch test comment --merge requests
export default function Navbar() {
  return (
    <div className="NavigationComponent">
      <Link className="NavigationComponent__Link" to="/">
        <img
          className="NavigationComponent__Link__LogoIcon"
          src={EngineLogo}
          alt="SearchEngineLogo"
        ></img>
        <p className="NavigationComponent__Link__LogoTitle">Rocketsearch.io</p>
      </Link>
      <Search />
      <button className="NavigationComponent__ThemeButton">Theme Switch</button>
    </div>
  );
}
