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

  //API call made hidden for testing purposes
  // useEffect(() => {
  //   if (searchTerm) {
  //     location.pathname == "/videos"
  //       ? getResults(`/search/q=${searchTerm} videos`)
  //       : getResults(`${location.pathname}/1=${searchTerm}$num=40`);
  //   }
  //   getResults("/search/q=NBA&num=40"); //q represents query to be searched and num represents how many searches can be returned
  // }, [searchTerm, location.pathname]); //watches these terms for changes and sends a request to the API using the getResults() function

  console.log(results);
  if (Loading) return <LoadingComponent />; // gaurd clause to ensure the loader is rendered during the process of the API call
  console.log(location.pathname);

  //Test switchcase added to test BTN's functionality
  switch (location.pathname) {
    case "/search":
      return (
        <div className="ResultContainer__CommonSearch">
          All incoming search results
        </div>
      );
    case "/videos":
      return (
        <div className="ResultContainer__VideosSearch">
          All video search results
        </div>
      );
    case "/images":
      return (
        <div className="ResultContainer__ImagesSearch">
          All image search results
        </div>
      );
    case "/news":
      return (
        <div className="ResultContainer__NewsSearch">
          All news search results
        </div>
      );
  }

  // switch (
  //   location.pathname //switch case to changed and render the ResultContext provider depending on the url extention type
  // ) {
  //   case "/search":
  //     return (
  //       <div className="ResultsContainer">
  //         {results?.results?.map(({ link, title }, index) => (
  //           <div key={index} className="ResultsContainer__resultItem">
  //             <a href={link} target=" blank " rel="noreferrer">
  //               <p className="ResultsContainer__resultItem__link">
  //                 {link.lenght > 30 ? link.substring(0, 30) : link}
  //               </p>
  //               <p className="ResultsContainer__resultItem__title">{title}</p>
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   case "/videos":
  //     return "Only video results displayed";
  //   case "/news":
  //     return "Only news results displayed";
  //   case "/images":
  //     return (
  //       <div className="ResultsContainer__resultItem-IMG">
  //         {results?.image_results?.map(
  //           ({ image, link: { href, title } }, index) => (
  //             <a
  //               className="ResultsContainer__resultItem-IMG__link"
  //               href={href}
  //               key={index}
  //               target="_blank"
  //               rel="noreferrer"
  //             >
  //               <img
  //                 className="ResultsContainer__resultItem-IMG__image"
  //                 src={image?.src}
  //                 alt={title}
  //                 loading="lazy"
  //               />
  //               <p className="ResultsContainer__resultItem-IMG__imageTitle">
  //                 {title}
  //               </p>
  //             </a>
  //           )
  //         )}
  //       </div>
  //     );
  //   default:
  //     return "ERROR";
  // }
}
