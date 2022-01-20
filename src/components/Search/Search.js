import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Search/Search.scss";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  function beginSearch(event) {
    setSearchValue(event.target.value);
    console.log(searchValue);
  }
  return (
    <div className="SearchComponent">
      <input
        className="SearchComponent__InputFeild"
        type="text"
        placeHolder="Launch in T-minus 10.."
        onChange={(e) => {
          beginSearch(e);
        }}
      />
      <button className="SearchComponent__GoBtn">Go</button>
    </div>
  );
}
