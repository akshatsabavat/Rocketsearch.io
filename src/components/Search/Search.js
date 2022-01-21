import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";
import { useDebounce } from "use-debounce"; //gives a certain time limit till a data can be stored
import "../Search/Search.scss";

export default function Search() {
  const [userIP, setuserIP] = useState("Covid 19");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(userIP, 500); // waits for 500ms and then processes the useIP state feild

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
      console.log(userIP);
    }
  }, [debounceValue]); //if any changes in debounce value updates the useResultcontext hook feild setSearch Term
  return (
    <div className="SearchComponent">
      <input
        value={userIP}
        className="SearchComponent__InputFeild"
        type="text"
        placeHolder="Launch in T-minus 10.."
        onChange={(e) => setuserIP(e.target.value)}
      />
      <button className="SearchComponent__GoBtn">Go</button>
    </div>
  );
}
