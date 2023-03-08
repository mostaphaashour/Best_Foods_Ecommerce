import React, { useEffect, useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productslice.js";
const Navbar = () => {
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [del, setDel] = useState(true);
  const [blur, setBlur] = useState(true);
  const [foods, setFoods] = useState([]);
  const cart = useSelector((state) => state.Cart);
  const products = useSelector((state) => state.products);
  const Fav = useSelector((state) => state.Fav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [products]);

  useEffect(() => {
    setFoods(products);
  }, [products]);


  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex justify-center items-center ">
        <div
          className="cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <div className="flex md:hidden ">
            <AiOutlineMenu size={30} />
          </div>
        </div>
        <Link to="/">
          <div className="text-2xl sm:text-3xl lg:text-4xl px-2">
            <h1>
              Best <span className="font-bold">Eats</span>
            </h1>
          </div>
        </Link>
        <div className="hidden lg:flex items-center cursor-pointer bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            onClick={() => {
              setDel(!del);
            }}
            className={
              del
                ? "bg-black text-white rounded-full p-2 duration-300"
                : " text-black rounded-full p-2 duration-300"
            }
          >
            Delivery
          </p>
          <p
            onClick={() => {
              setDel(!del);
            }}
            className={
              !del
                ? " text-white rounded-full p-2 bg-black duration-300"
                : " text-black rounded-full p-2 duration-300"
            }
          >
            Pickup
          </p>
        </div>
      </div>
      {/* search part */}
      <div className="bg-gray-200 rounded-full relative flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          onBlur={() => {
            setBlur(false);
          }}
          onFocus={() => {
            setBlur(true);
          }}
          onChange={(e) =>
            setSearch(
              foods.filter((item) => {
                return (
                  item.name

                    .toLowerCase()
                    .startsWith(e.target.value.toLowerCase()) &&
                  e.target.value !== ""
                );
              })
            )
          }
          className="bg-transparent p-2 focus:outline-none w-full searchinp
        "
          type="text"
          placholder="Search Foods"
        />
        {blur && (
          <div
            className={
              search.length === 0
                ? "hidden"
                : "absolute top-[110%] left-[-100px] md:left-1 z-[9] bg-white w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl py-2 max-h-[340px] overflow-x-hidden overflow-y-auto"
            }
          >
            {search.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mx-4 my-2 hover:shadow-xl hover:scale-[1.02] duration-300 rounded-2xl p-2 sm:p-6 cursor-pointer"
              >
                <div className="flex justify-between items-center ">
                  <img
                    className="h-[100px] w-[100px] mr-3 overflow-hidden"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex  flex-col">
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="bg-orange-500 text-white rounded-full p-1 w-fit">
                      {item.price}$
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onMouseDown={() => {
                      navigate(`Product/${item.id}`);
                      const searchinp = document.querySelector(".searchinp");
                      searchinp.value = "";
                      setSearch([]);
                    }}
                    className="font-bold hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex">
        {/* cart part */}
        <div className="mr-1">
          <Link to="Cart">
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full relative">
              <BsFillCartFill size={20} className="mr-2" />
              Cart
              <mark className="mark">{cart.length}</mark>
            </button>
          </Link>
        </div>
        {/* Fav part */}
        <div>
          <Link to="Favorites">
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full relative">
              <MdOutlineFavorite size={20} className="mr-2" />
              Favorites
              <mark className="mark">{Fav.length}</mark>
            </button>
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      <div className="flex md:hidden">
        {nav && (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
            {/* drawer menu */}
            <div
              onClick={() => setNav(!nav)}
              className={
                nav
                  ? "fixed  w-[300px] h-screen bg-white top-0 left-0 z-10 duration-300"
                  : "fixed  w-[300px] h-screen bg-white top-0 left-[-100] z-10 duration-300"
              }
            >
              <AiOutlineClose
                size={30}
                className="absolute top-4 right-4  bg-black rounded-full p-2 text-white cursor-pointer"
              />
              <h2 className="text-2xl p-4">
                Best <span className="font-bold">Eats</span>
              </h2>
              <nav>
                <ul className="flex flex-col  text-gray-800">
                  <Link to="Cart">
                    <li className="text-xl py-4 p-4 flex cursor-pointer  hover:bg-black/80 hover:text-white hover:duration-100 hover:animate-pulse">
                      <TbTruckDelivery size={25} className="mr-4" /> Orders
                    </li>
                  </Link>
                  <Link to="Favorites">
                    <li className="text-xl py-4 p-4 flex cursor-pointer hover:bg-black/80 hover:text-white hover:duration-100 hover:animate-pulse">
                      <MdFavorite size={25} className="mr-4" /> Favorites
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
