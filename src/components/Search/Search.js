import React from "react";
import "../Search/Search.scss";

export default function Search() {
  return (
    <div className="SearchComponent">
      <input
        className="SearchComponent__InputFeild"
        type="text"
        placeHolder="Launch in T-minus 10.."
      />
      <button className="SearchComponent__GoBtn">Go</button>
    </div>
  );
}
