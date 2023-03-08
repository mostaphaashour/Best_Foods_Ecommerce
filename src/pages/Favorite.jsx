import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removefromFav } from "../rtk/slices/FavoriteSlice";
const Favorite = () => {
  const Fav = useSelector((state) => state.Fav);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 ">
      {Fav.length > 0 && (
        <h1 className="font-bold text-[30px]">Favorite Items</h1>
      )}
      <div
        className={
          Fav.length > 0
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
            : "flex justify-center items-center"
        }
      >
        {Fav.length > 0 ? (
          Fav.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300 "
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
              <div className="absolute top-0 right-0 bg-black/70 w-full h-full opacity-0 hover:opacity-100 border rounded-lg">
                <p
                  className="bg-red-500 text-gray-300 absolute top-1 right-1 rounded-full p-2"
                  onClick={() => {
                    dispatch(removefromFav(item));
                  }}
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="font-bold text-[30px]">No Items In Favorite</h1>
        )}
      </div>
    </div>
  );
};

export default Favorite;
