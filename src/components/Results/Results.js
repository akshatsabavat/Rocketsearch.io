import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider/ResultContextProvider";

import "../Results/Results.scss";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ReactPlayer from "react-player";

export default function Results() {
  const { results, getResults, searchTerm, Loading } = useResultContext(); //constum built hook for getting result contexts
  const location = useLocation(); //ensures to store the current url extention to check the current page navigation

  // useEffect(() => {
  //   if (searchTerm) {
  //     if (location.pathname === "/videos") {
  //       getResults(`/search/q=${searchTerm} videos`);
  //     } else {
  //       getResults(`${location.pathname}/q=${searchTerm}&num=40`); //q represents query to be searched and num represents how many searches can be returned
  //     }
  //   }
  // }, [searchTerm, location.pathname]); //watches these terms for changes and sends a request to the API using the getResults() function

  // console.log(results);
  // if (Loading) return <LoadingComponent />; // gaurd clause to ensure the loader is rendered during the process of the API call
  // console.log(location.pathname);

  //Test switchcase added to test BTN and Search functionality
  switch (location.pathname) {
    case "/search":
      return <div className="ResultContainer">All incoming search results</div>;
    case "/videos":
      return <div className="ResultContainer">All video search results</div>;
    case "/images":
      return <div className="ResultContainer">All image search results</div>;
    case "/news":
      return <div className="ResultContainer">All news search results</div>;
  }

  // switch (
  //   location.pathname //switch case to changed and render the ResultContext provider depending on the url extention type
  // ) {
  //   case "/search":
  //     return (
  //       <div className="ResultsContainer">
  //         {results?.map(({ link, title, description }, index) => (
  //           <div key={index} className="ResultsContainer__container">
  //             <a
  //               className="ResultsContainer__resultItem"
  //               href={link}
  //               target=" blank "
  //               rel="noreferrer"
  //             >
  //               <a className="ResultsContainer__resultItem__link">
  //                 {link.length > 30 ? link.substring(0, 30) : link}
  //               </a>
  //               <p className="ResultsContainer__resultItem__title">{title}</p>
  //               <p className="ResultsContainer__resultItem__description hidden">
  //                 {description.length > 130
  //                   ? description.substring(0, 130)
  //                   : description}
  //               </p>
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   case "/videos":
  //     return (
  //       <div className="ResultsContainer">
  //         {results?.map((video, index) => (
  //           <div key={index} className="ResultsContainer__videoContainer">
  //             <ReactPlayer
  //               url={video.additional_links?.[0].href}
  //               controls
  //               width="355px"
  //               hieght="200px"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   case "/news":
  //     return (
  //       <div className="ResultsContainer">
  //         {results?.map(({ links, id, source, title }, index) => (
  //           <div key={id} className="ResultsContainer__container">
  //             <a
  //               className="ResultsContainer__resultItem"
  //               href={links?.[0].href}
  //               target=" blank "
  //               rel="noreferrer"
  //             >
  //               <p className="ResultsContainer__resultItem__title">{title}</p>
  //               <div>
  //                 <a src={source?.href} target=" blank " rel="noreferrer">
  //                   {source?.href}
  //                 </a>
  //               </div>
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   case "/images":
  //     return (
  //       <div className="ResultsContainer">
  //         {results?.map(({ image, link: { href, title } }, index) => (
  //           <a
  //             className="ResultsContainer__imageContainer"
  //             href={href}
  //             key={index}
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             <img
  //               className="ResultsContainer__imageContainer__image"
  //               src={image?.src}
  //               alt={title}
  //               loading="lazy"
  //             />
  //             <p className="ResultsContainer__imageContainer__imageName">
  //               {title}
  //             </p>
  //           </a>
  //         ))}
  //       </div>
  //     );
  //   default:
  //     return "ERROR";
  // }
}
