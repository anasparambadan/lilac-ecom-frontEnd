import React from "react";
import SlideCard from "./SlideCard";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import drone from "../assets/images/drone.png";
import speaker from "../assets/images/speaker.png";
import car from "../assets/images/car.png";


const ClassifiedSlide = () => {
  const data =[
    {img:drone, title:"Holy Stone HS470 Foldable GPS RC Drone", price:300.98, urgent:true},
    {img:speaker, title:"Marshall Stockwell II Portable Speaker", price:300.98, urgent:false},
    {img:car, title:"2020 Ford Mustang GT Fastback", price:22822, urgent:true},
    {img:drone, title:"Holy Stone HS470 Foldable GPS RC Drone", price:300.98, urgent:false}
  ]
  return (
    <div className="bg-[#E5E5E5] grid grid-cols-[1fr,4fr] gap-14 justify-items-center py-10">
      <div className=" flex flex-col justify-around items-center w-60">
        <span className="text-3xl text-black font-semibold text-center">
          Classified Products on the week
        </span>
        <div className="flex items-center gap-8">
          <div className="bg-[#FFFFFF] shadow-[0px_6px_14px_rgba(100,106,131,0.16)] rounded-full  w-[3.6rem] h-[3.6rem] flex items-center justify-center">
            <CgChevronLeft />
          </div>
          <div className="bg-[#FFFFFF] shadow-[0px_6px_14px_rgba(100,106,131,0.16)] rounded-full w-[3.6rem] h-[3.6rem] flex items-center justify-center">
            <CgChevronRight />
          </div>
        </div>
        <div>
          <button className=" flex items-center justify-center text-lg gap-6 text-white font-bold w-[102] h-[27] bg-ccyan px-[31px] py-[20px] rounded-xl shadow-[0_11px_27px_rgba(0,198,215,0.35)]">
          <span>Explore</span>  <CgChevronRight className=""/>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around gap-5">

      {data.map((product,i)=>{
        return <SlideCard item={product} key={i}/>

      })}
     
    
      </div>

      
    </div>
  );
};

export default ClassifiedSlide;
