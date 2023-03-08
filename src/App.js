import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FoodItem from "./pages/FoodItem";
import Favorite from "./pages/Favorite";


function App() {

  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="Product/:ProductId" element={<FoodItem />} />
          <Route path="/Favorites" element={<Favorite />} />
        </Routes>
    </>
  );
}

export default App;
