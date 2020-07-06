import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable() {
  return (
    <div className="ui container product-table">
      ProductTable
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

export default ProductTable;
