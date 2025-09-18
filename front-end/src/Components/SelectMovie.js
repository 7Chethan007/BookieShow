import React from "react";
import { moviesList } from "../data";
import RadioComponent from "./RadioComponent";
import '../Css/SelectMovie.css'

const SelectMovie = () => {
  return (
    <div className="SM_main_container">
      {
        // moviesList is assumed to be an array of movie names or objects.
        // The map function iterates over each element (el) in moviesList.
        // For each movie, it returns a RadioComponent with:
        //   - text prop set to the current movie (el)
        //   - key prop set to the current index (index) for React's list rendering
        moviesList.map((el, index) => {
          return <RadioComponent text={el} key={index} />;
        })
      }
    </div>
  );
};

export default SelectMovie;
