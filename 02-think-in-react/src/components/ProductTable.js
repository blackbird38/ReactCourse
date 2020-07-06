import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ categories, products, filterText, isStockOnly }) {
  const searchProduct = () => {
    const foundProducts = products.filter(
      (product) => product.name.indexOf(filterText) !== -1
    );
    return foundProducts;
  };

  const getProductsByCategory = (category) => {
    let categProducts;
    if (filterText === '') {
      categProducts = products.filter((product) => product.category === category);
    } else {
      const foundProducts = searchProduct();
      categProducts = foundProducts.filter(
        (product) => product.category === category
      );
    }
    if (isStockOnly === true) {
      return categProducts.filter((product) => product.stocked === isStockOnly);
    }
    return categProducts;
  };

  const getProducts = (category) => {
    return products.map.filter((product) => product.stocked === isStockOnly);
  };

  const rendered = categories.map((category) => {
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
      {rendered}
    </div>
  );
}

export default ProductTable;
