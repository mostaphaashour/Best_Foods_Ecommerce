import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../rtk/slices/CartSlice";
// import { data } from "../data/data";
import { fetchProducts } from "../rtk/slices/productslice";
const FoodItem = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="max-w-[1640px]  mx-auto flex justify-center items-center p-4">
      <div className=" mt-2 w-[100%]">
        {products.map((e) => {
          if (e.id === +params.ProductId)
            return (
              <div key={e.id} className="border rounded-lg">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full max-h-[400px] object-cover rounded-t-lg"
                />
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold ">{e.name}</p>
                  <p>
                    <span className="bg-orange-500 text-white rounded-full p-1">
                      {e.price + "$"}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="flex justify-center items-center">
                    <label htmlFor="amount">Amount</label>
                    <input
                      min={1}
                      id="amount"
                      className="p-2 focus:outline-none m-2 border rounded-lg border-orange-500 w-[50%] lg:w-full"
                      type="number"
                    />
                    <Link to="/">
                      <button
                        onClick={(event) => {
                          let inp = document.getElementById("amount").value;
                          if (inp === "" || +inp === 0) {
                            event.preventDefault();
                          } else {
                            let a = {
                              e: e,
                              inp: inp,
                            };
                            dispatch(addToCart(a));
                          }
                        }}
                        className="p-2 px-4 mr-2 hover:border-orange-500 hover:text-white hover:bg-orange-500"
                      >
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default FoodItem;
