import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ categories, products }) {
  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };
  /*
  const getRenderedProducts = () => {
    return categories.map((category) => {
      const productsFilteredByCategory = products.filter((product) => {
        product.category === category;
      });
      return <
    });
  };*/

  const renderedCategories = categories.map((category) => {
    return (
      <div>
        <ProductCategoryRow category={category} key={category}></ProductCategoryRow>
        <ProductRow products={getProductsByCategory(category)} />
      </div>
    );
  });
  return (
    <div className="ui container product-table">
      ProductTable
      <p>Name | Price {categories.length}</p>
      {renderedCategories}
    </div>
  );
}

export default ProductTable;
