import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useResultContext } from "../../contexts/ResultContextProvider";

import "../Results/Results.scss";

export default function Results() {
  const { getResults, results, searchTerm, setSearchTerm, Loading } =
    useResultContext(); //constum built hook for getting result contexts
  const location = useLocation();
  return <div classname="SearchResultsComponent">Results</div>;
}
