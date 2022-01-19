import "../SearchNavigator/SearchNavigator.scss";
import ImagesIcon from "../../Assets/ImagesIcon.svg";
import NewsIcon from "../../Assets/NewsIcon.svg";
import SearchIcon from "../../Assets/SearchIcon.svg";
import VideoIcon from "../../Assets/VideoIcon.svg";

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchNavigator() {
  const [btnState, setBtnState] = useState(1);

  function BtnActive(tabNumber) {
    setBtnState(tabNumber);
    console.log(btnState);
  }

  return (
    <div className="SearchNavigatorComponent">
      <ul className="SearchNavigatorComponent__Btns">
        <l1>
          <Link
            onClick={() => BtnActive(1)}
            to={`/search`}
            className={
              btnState === 1
                ? "SearchNavigatorComponent__Btns__Item"
                : "SearchNavigatorComponent__Btns__Item altItem"
            }
          >
            All{" "}
            <img
              className={
                btnState === 1
                  ? "SearchNavigatorComponent__Btns__Item__ItemIcon"
                  : "SearchNavigatorComponent__Btns__Item__ItemIcon altItem__icon"
              }
              alt="AllIcon"
              src={SearchIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link
            onClick={() => BtnActive(2)}
            to={`/news`}
            className={
              btnState === 2
                ? "SearchNavigatorComponent__Btns__Item"
                : "SearchNavigatorComponent__Btns__Item altItem"
            }
          >
            News
            <img
              className={
                btnState === 2
                  ? "SearchNavigatorComponent__Btns__Item__ItemIcon"
                  : "SearchNavigatorComponent__Btns__Item__ItemIcon altItem__icon"
              }
              alt="NewsIcon"
              src={NewsIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link
            onClick={() => BtnActive(3)}
            to={`/images`}
            className={
              btnState === 3
                ? "SearchNavigatorComponent__Btns__Item"
                : "SearchNavigatorComponent__Btns__Item altItem"
            }
          >
            Images
            <img
              className={
                btnState === 3
                  ? "SearchNavigatorComponent__Btns__Item__ItemIcon"
                  : "SearchNavigatorComponent__Btns__Item__ItemIcon altItem__icon"
              }
              alt="ImageIcon"
              src={ImagesIcon}
            ></img>
          </Link>
        </l1>
        <l1>
          <Link
            onClick={() => BtnActive(4)}
            to={`/videos`}
            className={
              btnState === 4
                ? "SearchNavigatorComponent__Btns__Item"
                : "SearchNavigatorComponent__Btns__Item altItem"
            }
          >
            Videos
            <img
              className={
                btnState === 4
                  ? "SearchNavigatorComponent__Btns__Item__ItemIcon"
                  : "SearchNavigatorComponent__Btns__Item__ItemIcon altItem__icon"
              }
              alt="VideoIcon"
              src={VideoIcon}
            ></img>
          </Link>
        </l1>
      </ul>
    </div>
  );
}
