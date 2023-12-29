import React from "react";

const ResCard = (props) => {
  const { restaurant } = props;
  return (
    <>
      <div className="mt-10 px-5">
        <div className="border border-solid px-12 rounded-3xl shadow-2xl w-[400px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">
          <img
            className="p-2 m-2 w-[100%] h-[300px] rounded-[40%] object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant.cloudinaryImageId
            }
            alt="Food img"
          />
          <div className="p-6 font-serif">
            <div className="px-1 py-2 text-2xl font-bold font-mono">
              {restaurant.name}
            </div>
            <div>
              <div>
                {restaurant.avgRatingString} | {restaurant.costForTwo}
              </div>
              <div>{restaurant.cuisines.join(", ")}</div>
              <div>{restaurant.areaName}</div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 flex"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>

                <h3 className="">{restaurant.avgRating}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCard;
