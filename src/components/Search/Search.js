import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";
import { useDebounce } from "use-debounce";
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
