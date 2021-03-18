import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../components/Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const {
    toggleFavorite,
    addCartItems,
    cartItems,
    removeFromCart,
  } = useContext(Context);

  function heartIconDiaplay() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIconDisplay() {
    //const inCart = cartItems.filter((elem) => elem.id === img.id);
    const inCart = cartItems.some((item) => item.id === img.id);
    if (inCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addCartItems(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIconDiaplay()}
      {cartIconDisplay()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    id: PropTypes.string.isRequired,
  }),
};
export default Image;
