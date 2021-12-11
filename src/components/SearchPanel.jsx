import React from "react";
import Loader from "./Loader/Loader";

const SearchPanel = ({
  value,
  isLoading,
  searchingCity,
  startSearch,
  clearInput,
}) => {
  return (
    <div className="search-panel">
      <input
        type="text"
        value={value}
        onChange={searchingCity}
        onKeyDown={startSearch}
        placeholder={"Enter the city"}
        disabled={isLoading}
      />
      <button onClick={clearInput}>clear</button>
      {isLoading ? <Loader /> : null}
    </div>
  );
};

export default SearchPanel;
