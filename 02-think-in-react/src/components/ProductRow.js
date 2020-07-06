import React from 'react';

function ProductRow({ products }) {
  const getBackgroundColor = (isStockOnly) => {
    return isStockOnly ? 'lightgreen' : 'pink';
  };

  const renderedProducts = products.map((product) => {
    const color = getBackgroundColor(product.stocked);

    return (
      <div
        key={product.name}
        className="ui container product-row"
        style={{ backgroundColor: `${color}` }}
      >
        {product.name} {product.price}
      </div>
    );
  });
  return <div className="ui container product-row">{renderedProducts}</div>;
}

export default ProductRow;
