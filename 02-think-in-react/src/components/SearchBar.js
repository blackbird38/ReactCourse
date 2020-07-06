import React from 'react';

function SearchBar(props) {
  const { filterText, isStockOnly, handleChange, handleChangeCheckbox } = props;

  function onHandleChange(e) {
    console.log(e.target.value);
    handleChange(e.target.value);
  }

  function onHandleChangeCheckbox(e) {
    console.log(e.target.checked);
    handleChangeCheckbox(e.target.checked);
  }

  return (
    <div className="search-bar">
      <span>SearchBar </span>
      <div className="ui input">
        <input
          type="text"
          placeholder="Search..."
          wtx-context="DEAE458E-C678-4D47-94A2-34619AB80609"
          onChange={onHandleChange}
          value={filterText}
        />
      </div>
      <br />
      <div className="ui checkbox">
        <input
          type="checkbox"
          wtx-context="50AF58B2-15D5-4C56-939B-56254234050C"
          onChange={onHandleChangeCheckbox}
          checked={isStockOnly}
        />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
