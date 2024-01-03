import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { Spinner } from '@material-tailwind/react'

const ResContainer = () => {
  const [resdata, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [listData, setlistData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await res.json();
    // console.log(json1);
    const resdata =
      json1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setResData(resdata);
    setlistData(resdata);
    // console.log(resdata[0].info);
    setIsLoading(false);
  };

  const topResHandler = () => {
    console.log(topResHandler);
    const result = listData.filter((res) => res.info.avgRating > 4.0);
    setResData(result);
  };
  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
    // console.log(e.target.value);
    searchRestaurentHandler(e.target.value);
  };
  const searchRestaurentHandler = (value) => {
    const result = listData.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setResData(result);
  };

  

  return (
    <>
      {isLoading ? (
        <div className='text-2xl text-center m-[50%]'><Spinner/></div>
      ) : (
        <>
          <div className="mx-[30%]">
            <input
              onChange={textChangeHandler}
              value={searchText}
              className="px-10 py-3 mx-5 h-18 w-96 rounded-2xl border  shadow-2xl text-3xl"
              type="text"
            />
            <button
              className="bg-blue-400 rounded-3xl px-10 py-3 m-3"
              onClick={searchRestaurentHandler}
            >
              Search
            </button>
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm mx-6 px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={topResHandler}
            >
              Top restaurants
            </button>
          </div>
          <div className="flex gap-6 flex-wrap">
            {resdata.map((res) => {
              return <ResCard key={res.info.id} restaurant={res.info} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ResContainer;
