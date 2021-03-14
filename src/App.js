import React from "react";
import { Switch, Route } from "react-router-dom"; //step 1

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Header />
      //step 1
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
