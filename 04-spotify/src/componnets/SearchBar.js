import React from 'react';

const SearchBar = () => {
  return (
    <div className="ui action input">
      <input
        type="text"
        placeholder="Search..."
        wtx-context="6921A6D0-8BA7-4F93-8AD1-F489A90CD245"
      />
      <button className="ui icon button">
        <i className="search icon"></i>
      </button>
    </div>
  );
};

export default SearchBar;
