import React, { useState, useContext } from "react";
import { Context } from "../components/Context";

import CartItem from "../components/cartItem";

function Cart() {
  const [orderText, setOrderText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);

  const cartElement = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  //step 16
  const cartItemsCost = 5.99 * cartItems.length;
  const totalCost = cartItemsCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  //step 17
  function Order() {
    setOrderText("Ordering...");
    setTimeout(() => {
      setOrderText("Place Order");
      emptyCart();
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElement}

      <p className="total-cost">
        Total:
        {totalCost}
      </p>
      <div className="order-button">
        <button onClick={Order}>{orderText}</button>
      </div>
    </main>
  );
}

export default Cart;
