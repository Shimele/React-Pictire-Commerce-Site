import React, { useState, useContext } from "react";
import "../styles.css";
import { Context } from "../components/Context";

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
export default CartItem;
