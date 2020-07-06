import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <span>SearchBar </span>
      <div class="ui input">
        <input
          type="text"
          placeholder="Search..."
          wtx-context="DEAE458E-C678-4D47-94A2-34619AB80609"
        />
      </div>
      <br />
      <div className="ui checkbox">
        <input type="checkbox" wtx-context="50AF58B2-15D5-4C56-939B-56254234050C" />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
