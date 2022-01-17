import React from "react";
import { createContext } from "react";
import { useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"; //API endpoint --note : Only 600 calls per month

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]); //code to set the results we aquired from the get results function
  const [searchTerm, setSearchTerm] = useState(""); //code to set and change the search Log
  const [Loading, setLoading] = useState(""); // code to set and unset the loader animation while an API call is being made

  const getResults = async (urlType) => {
    // the urlType here is a parameter for /videos, /news and /images
    setLoading(true); //starts the loading animation
    const fetchResponse = await fetch(`${baseUrl}${urlType}`, {
      //fetches the data from the API
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "7ccbf1342cmsh55f76f4c9dd164ep1daa56jsn354d0c52a70a",
      },
    });

    const processedData = await fetchResponse.json(); //process the fetched data into a JSON format
    setResults(processedData); //displays the processed data from the API call
    setLoading(false); //stops the loader animation
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, Loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
