import React, { useState } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="flex justify-between w-full px-4 py-4">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
      </ul>
      <div className="flex items-center">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
        <div onClick={handleNav} className="cursor-pointer sm:hidden">
          <FaBars size={30} />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center text-gray-300 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-8 text-2xl">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#deals">Deals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
