import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <BsChatSquareDots size={30} className="mr-4" />
        <h1 className="text-xl font-bold text-gray-700">karibu Nyumbani</h1>
      </div>
    </div>
  );
};
export default Footer;
