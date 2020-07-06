import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable() {
  return (
    <div className="ui container product-table">
      ProductTable
      <p>Name | Price</p>
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

export default ProductTable;
