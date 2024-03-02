import React from "react";
import "../style/navbar.css";
import shoppingSVG from "../assets/image/shopping.svg";

function Navbar({ size, setShow }) {
  return (
    <nav className="container">
      <header>
        <h1 className="storeName" onClick={() => setShow(true)}>
          Global Gastronomy Cafe
        </h1>
        <div onClick={() => setShow(false)} className="shopping">
          <img src={shoppingSVG} alt="Shopping Cart" />
          <span className="quantity">{size}</span>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
