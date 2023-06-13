import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import "./App.css";

function App() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 2,
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    console.log(`hii`, value)
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={productsArr} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
