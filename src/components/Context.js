import React, { useState, useEffect } from "react";

const Context = React.createContext(); //step 2

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]); //step 3
  const [cartItems, setCartItems] = useState([]);

  //set 4
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  //step 8
  function toggleFavorite(id) {
    const newArray = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(newArray);
  }

  function addCartItems(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addCartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
