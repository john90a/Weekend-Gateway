import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <div className="flex items-center">
        <BsChatSquareDots size={30} className="mr-2" />
        <h1 className="text-gray-600 font-bold text-4xl">WEEKENDAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} />
          <p>9AM - 5AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} />
          <p>+1 123 456 7890</p>
        </div>
        <button className="text-blue-600 font-bold">Get a Free Quote</button>
      </div>
    </div>
  );
};
export default TopBar;
