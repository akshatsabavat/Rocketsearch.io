import "../SearchNavigator/SearchNavigator.scss";

import React from "react";
import { Link } from "react-router-dom";

export default function SearchNavigator() {
  return (
    <div className="SearchNavigatorComponent">
      <ul className="SearchNavigatorComponent__Btns">
        <l1>
          <Link to={`/search`} className="SearchNavigatorComponent__Btns__Item">
            All
          </Link>
        </l1>
        <l1>
          <Link to={`/news`} className="SearchNavigatorComponent__Btns__Item">
            News
          </Link>
        </l1>
        <l1>
          <Link to={`/images`} className="SearchNavigatorComponent__Btns__Item">
            Images
          </Link>
        </l1>
        <l1>
          <Link to={`/videos`} className="SearchNavigatorComponent__Btns__Item">
            Videos
          </Link>
        </l1>
      </ul>
    </div>
  );
}
