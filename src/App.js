import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product" element={<SingleProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
