import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-4xl font-bold">
          Resort
        </h3>
        <img
          className="w-full h-full object-cover relativer border-4 border-white-lg"
          src=" https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-4xl font-bold">
          Boat Tour
        </h3>
        <img
          className="w-full h-full object-cover relative border-4  border-white shadow-lg"
          src=" https://images.pexels.com/photos/3274984/pexels-photo-3274984.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[-50] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-4xl font-bold">
          Fishing
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src=" https://images.pexels.com/photos/2728035/pexels-photo-2728035.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="/"
        />
      </div>
    </div>
  );
};
export default Activities;
