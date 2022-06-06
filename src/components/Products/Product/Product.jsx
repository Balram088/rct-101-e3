import React, { useEffect } from "react";
import { useState } from "react";

const Product = () => { 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () =>{
      let r =await fetch("http://localhost:8080/products");
      let data = await r.json();
      console.log(data)
       setProducts(data);
    };

  },[]);
  // Note: this id should come from api
  
  const product = { id: 1 };


  
  return (
    <>
      {products.map((product) =>(
    <div data-cy={`product-${product.id}`} key={product.id}>
      {Product.id};
      <h3 data-cy="product-name"  >
      {product.name}
      </h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
      
  ))}
    </>
  );
};

export default Product;
