import React from "react";
import "../index.css";

const Search = () => {
  return (
    <div className="container">
      <h3>Select Input</h3>
      <div className="filter-options">
        <div className="filter-item">
          <label>Segment</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="filter-item">
          <label>IH/RH</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Portfolio Head</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className="filter-item">
          <label>MCO</label>
          <select>
            <option>Select</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
