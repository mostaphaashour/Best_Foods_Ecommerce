import React, { useEffect, useState } from "react";
import axios from "axios";
const Categories = () => {
  const [category, setCategories] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://mostaphaashour.github.io/burger_api/burger-data-api.json"
    );
    setCategories(data.cat);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(category);

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {category.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer shadow-lg hover:scale-105 duration-300"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
