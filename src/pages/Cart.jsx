import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../rtk/slices/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className="max-w-[1640px]  mx-auto flex justify-center items-center py-12 px-4">
      {cart.length > 0 ? (
        <div className={cart.length > 0 && "flex justify-center items-center"}>
          <div className="min-w-[200px] mt-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-scroll">
                <thead className="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Food name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4  whitespace-nowrap flex justify-center items-center"
                      >
                        <img src={item.image} alt="" className="h-12 w-12 " />
                      </th>
                      <td className="px-6 py-4 text-center">{item.name}</td>
                      <td className="px-6 py-4 text-center">{item.category}</td>
                      <td className="px-6 py-4 text-center">{item.price}</td>
                      <td className="px-6 py-4 text-center">{item.amount}</td>
                      <td className="px-6 py-4 text-center">
                        {+item.amount * +item.price + "$"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            dispatch(removeFromCart(item));
                          }}
                          className="bg-black text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cart.length > 0 && (
                <div className="mx-2 my-2">
                  Total Price:
                  {" " +
                    cart.reduce((acc, i) => {
                      acc = acc + +i.price * +i.amount;
                      return acc;
                    }, 0) +
                    "$"}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="flex justify-end mt-5 mr-6">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-[#FF0000] text-white text-lg border-none "
                >
                  clear
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1 className="font-bold text-[30px]">No Items In Cart</h1>
      )}
    </div>
  );
};

export default Cart;
