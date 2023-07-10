import React, { useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }

  return (
    <div className="container">
      <div className="add-content">
        <img
          src="https://e0.pxfuel.com/wallpapers/843/673/desktop-wallpaper-purple-998-background-purple-star.jpg"
          alt=""
        />
        <div className="titles">
          <h1>Eğlence Seni Bekliyor..</h1>
          <h2> Biraz Sosyalleşmeye Ne dersin ? </h2>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Konserler,tiyatrolar,sergiler ara.."
            onChange={onChange}
          />
        </div>
      </div>
      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <ResultCart movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Add;
