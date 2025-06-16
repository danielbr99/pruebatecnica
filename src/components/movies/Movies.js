import React from "react";
import allMoviesData from "../../data/sample.json";
import "./Movies.css";

const Movies = () => {
  const allData = allMoviesData.entries;
  const dataToDisplay = allData
    .filter((item) => item.programType === "movie") 
    .map((item) => ({
      id: item.title + item.releaseYear,
      title: item.title, 
      imageUrl: item.images["Poster Art"].url, 
      isOriginal: item.description.includes("Stan.Original"), 
    }));

  return (
    <section className="popular-section">
      <h2 className="section-title">Popular Movies</h2>
      <div className="section-grid">
        {dataToDisplay.map((movies) => (
          <div className="section-card" key={movies.id}>
            <img
              src={movies.imageUrl}
              alt={movies.title}
              className="section-image"
            />
            <p className="section-individual-title">{movies.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;
