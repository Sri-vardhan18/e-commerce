import React from "react";
import Home from "./Components/Home";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;