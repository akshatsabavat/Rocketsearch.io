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

  useEffect(() => {
    getResults("/search/q=NBA&num=40"); //q represents query to be searched and num represents how many searches can be returned
  }, []);

  console.log(results);
  if (Loading) return <LoadingComponent />; // gaurd clause to ensure the loader is rendered during the process of the API call
  console.log(location.pathname);

  switch (
    location.pathname //switch case to changed and render the ResultContext provider depending on the url extention type
  ) {
    case "/search":
      return (
        <div className="ResultsContainer">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="ResultsContainer__resultItem">
              <a href={link} target=" blank " rel="noreferrer">
                <p className="ResultsContainer__resultItem__link">
                  {link.lenght > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="ResultsContainer__resultItem__title">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return "Only video results displayed";
    case "/news":
      return "Only news results displayed";
    case "/images":
      return "Only imaged results displayed";
    default:
      return "ERROR";
  }
}
