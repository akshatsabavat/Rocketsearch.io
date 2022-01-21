import React from "react";
import { useState } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";
import "../Search/Search.scss";

export default function Search() {
  const { setSearchTerm, searchTerm } = useResultContext();
  const [searchValue, setSearchValue] = useState("");
  const [buttonState, setButtonState] = useState(0);

  function beginSearch(event) {
    setSearchValue(event.target.value);
    setSearchTerm(searchValue);
    console.log(searchTerm);
  }
  return (
    <div className="SearchComponent">
      <input
        className="SearchComponent__InputFeild"
        type="text"
        placeHolder="Launch in T-minus 10.."
        // onChange={(e) => {
        //   this.setState({ query: e.target.value });
        // }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            beginSearch(e);
          }
        }}
      />
      <button className="SearchComponent__GoBtn">Go</button>
    </div>
  );
}
