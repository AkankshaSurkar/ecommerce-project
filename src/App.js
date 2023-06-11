import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Error";
import "./App.css";
// import RootLayout from "./Pages/Root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/store", element: <Store /> },
//     ],
//   },
// ]);

function App() {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 2,
    },

    {
      id: 4,
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
    setShowCart(value);
  };

  return (
    <div>
      {/* <RouterProvider router={router} /> */}

      <Header count={cart.length} handleShow={handleShow}></Header>
      <Switch>
        <Route path="/home" exact Pages={Home} />
        <Route path="/about" Pages={About} />
        <Route path="/store" Pages={Store} />
        <Route path="*" Pages={ErrorPage} />
      </Switch>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={productsArr} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
