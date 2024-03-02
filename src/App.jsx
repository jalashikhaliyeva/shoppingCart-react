import { useState } from "react";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Cards from "./Cards";
import Amazon from "./Amazon";
import "./style/amazon.css";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showWarning, setShowWarning] = useState(false); // State to control warning message

  function handleClick(product) {
    console.log(product);
    let isPresent = false;
    cart.forEach((item) => {
      console.log(item);
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 1000);
      return;
    }
    setCart([...cart, product]); // Add product to the cart
    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  }

  function handleChange(product, d) {
    console.log(product, d);
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const updatedItem = { ...item, amount: item.amount + d };
        if (updatedItem.amount === 0) {
          return { ...updatedItem, amount: 1 };
        }
        return updatedItem;
      }
      return item;
    });
    setCart(updatedCart);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }



  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      <Cards />
     

      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {showWarning && (
        <div className="warning">Item is already added to your cart</div>
      )}
      <div className="scrollToTopBtn" onClick={scrollToTop}>
        <span>&#9650;</span>
      </div>
    </>
  );
}

export default App;
