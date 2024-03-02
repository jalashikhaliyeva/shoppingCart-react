import { useEffect, useState } from "react";
import "../style/card.css";
import deleteIcon from "../assets/image/delete-bin-5-line.svg";
import img1 from "../assets/image/1.PNG";
import img2 from "../assets/image/2.PNG";
import img3 from "../assets/image/3.PNG";
import img4 from "../assets/image/4.PNG";
import img5 from "../assets/image/5.PNG";
import img6 from "../assets/image/6.PNG";
import img7 from "../assets/image/7.PNG";
import img8 from "../assets/image/8.PNG";
import img9 from "../assets/image/9.PNG";
import img10 from "../assets/image/10.PNG";
import img11 from "../assets/image/11.PNG";
import img12 from "../assets/image/12.PNG";
import img13 from "../assets/image/13.PNG";
import img14 from "../assets/image/14.PNG";

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  function handlePrice() {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price));
    setPrice(total);
  }

  useEffect(() => {
    handlePrice();
  });
  function handleRemove(id) {
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
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
  return (
    <article>
      {cart && cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <ul className="listCard" key={item.id}>
              <li>
                <div>
                  <img src={imageMap[item.name]} alt={item.title} />
                  <p className="itemName">{item.name}</p>
                </div>
                <div>
                  <button onClick={() => handleChange(item, 1)}>+</button>
                  <span>{item.amount}</span>
                  <button onClick={() => handleChange(item, -1)}>-</button>
                  <span className="itemPrice">{item.price}₼ </span>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="removeBtn"
                  >
                    <img className="removeIcon" src={deleteIcon} />
                  </button>
                </div>
              </li>
            </ul>
          ))}
          <div>
            <span className="totalPrice">
              Total price of your order : {price} ₼{" "}
            </span>
          </div>
        </>
      ) : (
        <div className="nothingInCard">There is nothing in your cart</div>
      )}
    </article>
  );
}

export default Cart;
