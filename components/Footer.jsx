import React from "react";
import { CiSearch, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container flex mx-auto flex-col md:flex-row md:justify-between lora-font py-7">
      <div className="flex gap-3 justify-between px-3 pt-7">
        <div>
          <div className="flex">
            <p className="text-3xl">16</p>
            <p className="text-sm">DAYS</p>
          </div>
          <p>You can return for free</p>
        </div>
        <div>
          <div className="flex">
            <p className="text-3xl">4-5</p>
            <p className="text-sm">DAYS</p>
          </div>
          <p>The maximum delivery time</p>
        </div>
      </div>
      <div className="flex items-center relative mx-auto w-full px-5 pt-7">
        <input
          type="text"
          placeholder="Find your best furnitures"
          className="w-[100%] h-[50px] border-b-2 border-gray-500 p-2"
        />
        <CiSearch className="absolute right-5" />
      </div>
      <div className="flex items-center p-3 text-3xl gap-3 mx-auto pt-7">
        <FaDribbble />
        <CiLinkedin />
        <CiInstagram />
      </div>
    </div>
  );
};

export default Footer;
