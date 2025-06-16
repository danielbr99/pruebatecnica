import React from "react";
import allSeriesData from "../../data/sample.json";
import "./Series.css";

const Series = () => {
  const allData = allSeriesData.entries;
  const dataToDisplay = allData
    .filter((item) => item.programType === "series") 
    .map((item) => ({
      id: item.title + item.releaseYear,
      title: item.title,
      imageUrl: item.images["Poster Art"].url,
      isOriginal: item.description.includes("Stan.Original"),
    }));

  return (
    <section className="popular-section">
      <h2 className="section-title">Popular Series</h2>
      <div className="section-grid">
        {dataToDisplay.map((series) => (
          <div className="section-card" key={series.id}>
            <img
              src={series.imageUrl}
              alt={series.title}
              className="section-image"
            />
            <p className="section-individual-title">{series.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Series;
