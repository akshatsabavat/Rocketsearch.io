import "../SearchNavigator/SearchNavigator.scss";
import ImagesIcon from "../../Assets/ImagesIcon.svg";
import NewsIcon from "../../Assets/NewsIcon.svg";
import SearchIcon from "../../Assets/SearchIcon.svg";
import VideoIcon from "../../Assets/VideoIcon.svg";

import React from "react";
import { Link } from "react-router-dom";

export default function SearchNavigator() {
  return (
    <div className="SearchNavigatorComponent">
      <ul className="SearchNavigatorComponent__Btns">
        <l1>
          <Link to={`/search`} className="SearchNavigatorComponent__Btns__Item">
            All{" "}
            <img
              className="SearchNavigatorComponent__Btns__Item__ItemIcon"
              alt="AllIcon"
              src={SearchIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link to={`/news`} className="SearchNavigatorComponent__Btns__Item">
            News
            <img
              className="SearchNavigatorComponent__Btns__Item__ItemIcon"
              alt="NewsIcon"
              src={NewsIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link to={`/images`} className="SearchNavigatorComponent__Btns__Item">
            Images
            <img
              className="SearchNavigatorComponent__Bts__Item__ItemIcon"
              alt="ImageIcon"
              src={ImagesIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link to={`/videos`} className="SearchNavigatorComponent__Btns__Item">
            Videos
            <img
              className="SearchNavigatorComponent__Bts__Item__ItemIcon"
              alt="VideoIcon"
              src={VideoIcon}
            ></img>
          </Link>
        </l1>
      </ul>
    </div>
  );
}
