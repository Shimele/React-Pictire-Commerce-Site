import React, { useState, useEffect } from "react";

const Context = React.createContext(); //step 2

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]); //step 3
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
  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
