import React from 'react';
import products from "./data"
import './style/amazon.css'
import Cards from "./Cards"

function Amazon({handleClick}) {
    // Assuming 'products' is an array of product objects
    return (
      <section>
        {products.map(product => (
          <Cards key={product.id} product={product} handleClick={handleClick} /> 
        ))}
      </section>
    );
  }
  
  export default Amazon;