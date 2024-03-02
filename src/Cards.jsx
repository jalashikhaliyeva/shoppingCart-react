import React from "react";
import "./style/cart.css";
import img1 from "./assets/image/1.PNG"; // Import the chicken image
import img2 from "./assets/image/2.PNG"; // Import the salmon image
import img3 from "./assets/image/3.PNG"; // Import the salmon image
import img4 from "./assets/image/4.PNG"; // Import the salmon image
import img5 from "./assets/image/5.PNG"; // Import the salmon image
import img6 from "./assets/image/6.PNG"; // Import the salmon image
import img7 from "./assets/image/7.PNG"; // Import the salmon image
import img8 from "./assets/image/8.PNG"; // Import the salmon image
import img9 from "./assets/image/9.PNG"; // Import the salmon image
import img10 from "./assets/image/10.PNG"; // Import the salmon image
import img11 from "./assets/image/11.PNG"; // Import the salmon image
import img12 from "./assets/image/12.PNG"; // Import the salmon image
import img13 from "./assets/image/13.PNG"; // Import the salmon image
import img14 from "./assets/image/14.PNG"; // Import the salmon image

function Cards({ product, handleClick }) {
  // Check if 'product' is defined before rendering
  if (!product) {
    return null; // Return null if 'product' is undefined
  }
  const imageMap = {
    "Stuffed Chicken": img1,
    "Baked chicken wings": img2,
    "Salad with salmon": img3,
    "Butternut soup": img4,
    "Salad with cherry tomatoes": img5,
    "Oregano pizza": img6,
    "Potatoe pancakes with bacon": img7,
    "Chrispy chichken nuggets": img8,
    "Bowl of basko": img9,
    "Fried chicken nuggets": img10,
    "Beef Rendang": img11,
    "Sayur Lodeh": img12,
    "Spicy Noodles": img13,
    "Pasta Carbonara": img14,
  };
  // Render the component if 'product' is defined
  return (
   

      <div className="item">
        <img src={imageMap[product.name]} alt={product.name} />
        <div className="title">{product.name}</div>
        <div className="price">{product.price}₼</div>
        <button onClick={()=>handleClick(product)}>Add To Cart</button>
      </div>


  );
}

export default Cards;
