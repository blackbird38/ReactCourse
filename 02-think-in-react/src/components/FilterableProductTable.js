import './App.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable() {
  const products = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
  ];

  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  const getUniqueCategories = (products) => {
    const categories = products.map((product) => {
      return product.category;
    });
    const filteredCategories = new Set(categories);
    return [...filteredCategories];
  };

  const uniqueCategories = getUniqueCategories(products);

  return (
    <div className="filterable-product-table">
      <span>
        FilterableProductTable {filterText} {isStockOnly.toString()}
      </span>

      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        handleChange={setFilterText}
        handleChangeCheckbox={setIsStockOnly}
      />
      <ProductTable
        filterText={filterText}
        isStockOnly={isStockOnly}
        categories={uniqueCategories}
        products={products}
      />
    </div>
  );
}

export default FilterableProductTable;
