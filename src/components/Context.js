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
  console.log(allPhotos);
  return (
    <Context.Provider value={{ allPhotos }}>{props.children}</Context.Provider>
  );
}
export { Context, ContextProvider };
