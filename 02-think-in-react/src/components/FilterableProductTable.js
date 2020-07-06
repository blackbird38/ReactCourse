import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable() {
  return (
    <div className="filterable-product-table">
      <span>FilterableProductTable</span>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default FilterableProductTable;
