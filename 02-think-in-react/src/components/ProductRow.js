import React from 'react';

function ProductRow({ products }) {
  const renderedProducts = products.map((product) => {
    return (
      <div className="ui container product-row">
        {product.name} {product.price}
      </div>
    );
  });
  return <div className="ui container product-row">{renderedProducts}</div>;
}

export default ProductRow;
