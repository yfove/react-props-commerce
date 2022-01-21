import React from "react";

function Product({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>${price}</h3>
    </div>
  );
}

export default Product;
