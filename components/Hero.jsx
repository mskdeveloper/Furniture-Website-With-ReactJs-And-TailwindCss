import React from "react";
import heroLeft from "/hero-left.jpg";
import heroRight1 from "/hero-right1.jpg";
import heroRight2 from "/hero-right2.jpg";

const Hero = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto pt-8 flex flex-col md:flex-row gap-3">
        <div className="flex-1 px-5">
          <p className="font-medium text-gray-500">A beautifull house</p>
          <h1 className="font-bold text-7xl text-gray-800">Furniture.</h1>
          <p className="mt-7 text-gray-500 lora-font w-[300px]">
            Find out the most efficient way ro start organaizing your home.
            Begin by creating storage space.
          </p>
          <img
            src={heroLeft}
            alt="hero left"
            className="rounded-2xl mt-9 max-h-[350px]"
          />
        </div>
        <div className="grid grid-flow-col gap-5 flex-1 mt-7">
          <img src={heroRight1} alt="" className="rounded-2xl mt-[120px]" />
          <img src={heroRight2} alt="" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
