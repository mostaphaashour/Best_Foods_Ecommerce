import React from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFav } from "../rtk/slices/FavoriteSlice";

const FoodContent = (props) => {
  let Fav = useSelector((state) => state.Fav);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {props.foods.length > 0 &&
        props.foods.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className=" w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4  ">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white rounded-full p-1">
                  {item.price + "$"}
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <Link to={`Product/${item.id}`}>
                <button className="m-2 hover:border-orange-500 hover:text-white hover:bg-orange-500">
                  Order Now
                </button>
              </Link>
              <div
                className="lovediv flex items-center mr-3"
                id={item.id}
                onClick={() => {
                  // setClicked(!clicked);
                  dispatch(addToFav(item));
                }}
              >
                {Fav.find((e) => e.id === item.id) ? (
                  <MdOutlineFavorite size={25} className="text-red-600" />
                ) : (
                  <MdFavoriteBorder size={25} className="hover:text-red-600" />
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FoodContent;
