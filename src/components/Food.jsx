import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { fetchProducts } from "../rtk/slices/productslice";
import { addToFav, removefromFav } from "../rtk/slices/FavoriteSlice";
import FoodContent from "./FoodContent";
// import { data } from "../data/data.js";
const Food = () => {
  // const [foods, setFoods] = useState(data);

  const [foods, setFoods] = useState([]);
  let products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    setFoods(products);
  }, [products.length]);
  // console.log(Fav);

  // filter by types
  const filterType = (cat) => {
    setFoods(
      products.filter((item) => {
        return item.category === cat;
      })
    );
  };
  // filter by price
  const filterPrice = (price) => {
    setFoods(
      products.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter types */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-start flex-wrap">
            <button
              onClick={() => setFoods(products)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              Pizza
            </button>

            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter prices */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-start flex-wrap">
            <button
              onClick={() => filterPrice("1")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              1$
            </button>
            <button
              onClick={() => filterPrice("10")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              10$
            </button>
            <button
              onClick={() => filterPrice("100")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              100$
            </button>
            <button
              onClick={() => filterPrice("1000")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-500 m-1"
            >
              1000$
            </button>
          </div>
        </div>
      </div>
      {/* content */}
      <FoodContent foods={foods} />
    </div>
  );
};

export default Food;
