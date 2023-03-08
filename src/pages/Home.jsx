import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Food from "../components/Food";
import HeadLineCards from "../components/HeadLineCards";
import Hero from "../components/Hero";

const Home = () => {


  return (
    <>
      {" "}
      <Hero />
      <HeadLineCards />
      <Food />
      <Categories />
    </>
  );
};

export default Home;
