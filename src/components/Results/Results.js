import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";

import "../Results/Results.scss";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function Results() {
  const { getResults, results, searchTerm, setSearchTerm, Loading } =
    useResultContext(); //constum built hook for getting result contexts
  const location = useLocation(); //ensures to store the current url extention to check the current page navigation

  console.log(results);
  if (Loading) return <LoadingComponent />; // gaurd clause to ensure the loader is rendered during the process of the API call
  console.log(location.pathname);

  switch (
    location.pathname //switch case to changed and render the ResultContext provider depending on the url extention type
  ) {
    case "/search":
      return "All search results displayed";
    case "/videos":
      return "Only video results displayed";
    case "/news":
      return "Only news results displayed";
    case "/images":
      return "Only imaged results displayed";
    default:
      return "Error";
  }
}
