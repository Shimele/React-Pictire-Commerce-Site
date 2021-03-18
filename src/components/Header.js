import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../components/Context";

import { Link } from "react-router-dom";
import "../styles.css";

function Header() {
  const { cartItems } = useContext(Context);

  function cartIcon() {
    if (cartItems.length !== 0) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
    }
  }
  return (
    <header>
      <Link to="/">
        <h2>Pixel Lite</h2>
      </Link>
      <Link to="/cart">{cartIcon()}</Link>
    </header>
  );
}

export default Header;
