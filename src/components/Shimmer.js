import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="search-container">
        <input
          type="text"
          className="inputbar"
          placeholder="Enter First Name"
        />
        <button className="search-btn">search</button>
      </div>
      {Array(5)
        .fill("")
        .map((val, i) => {
          return <div className="square" key={i}></div>;
        })}
    </div>
  );
};

export default Shimmer;
