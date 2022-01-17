import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";

import "../Results/Results.scss";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function Results() {
  const { getResults, results, searchTerm, setSearchTerm, Loading } =
    useResultContext(); //constum built hook for getting result contexts
  const location = useLocation();

  console.log(results);
  if (Loading) return <LoadingComponent />; // gaurd clause to ensure the loader is rendered during the process of the API call
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return "Search";
    default:
      return "Error";
  }
}
