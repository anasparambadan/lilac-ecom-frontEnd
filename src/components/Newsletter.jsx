import React from "react";
import nletter from "../assets/icons/nletter.png";
import dots from "../assets/icons/dots.png";

const Newsletter = () => {
  return (
    <div className="h-72 w-full bg-cblue flex items-center justify-around ">
      <div>
        <img src={nletter} alt="" />
      </div>
      <div className="relative flex flex-col w-[42rem] items-start justify-center gap-7">
        <span className="text-3xl font-bold text-white">
          Sign Up for Newsletter
        </span>
        <span className="text-lg text-white font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <img src={dots} alt="" className="absolute -top-6 right-[45%] -z-2"/>
      </div>

      {/* input field */}
      <div className="">
        <div className="relative w-full h-20">
          
          <input
            type="text"
            placeholder="Enter your email here"
            className=" inline-flex h-20 justify-center items-center gap-x-[54px] rounded-xl bg-[#FFFFFF] px-3 pl-10 w-[40rem] text-xl font-font-medium text-[#4D4D4D] shadow-sm  ring-0 hover:bg-gray-50 focus:outline-0"
          />
           
            <button className="absolute top-2 right-1 px-11 py-5 bg-[#4D4D4D] rounded-xl text-white font-medium text-lg z-20">SUBSCRIBE</button>
            <img src={dots} alt="" className="absolute -right-6 top-[62%]  "/>
          
        
          
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
