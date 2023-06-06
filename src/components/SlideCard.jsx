import React from "react";
import {MdLocationOn} from 'react-icons/md'

const SlideCard = ({item})=> {

  return (
    <div>
      <div className="max-w-sm bg-[#FFFFFF] border  rounded-[1.87rem] shadow-[0px_9px_26px_rgba(0,0,2105,0.06)]">
        <div className="w-full relative">
          <img className="rounded-[1.87rem] w-full" src={item.img} alt="" />
          {item.urgent && <div className="bg-ccyan text-white font-semibold text-sm absolute p-2 rounded-l-full right-0 top-6">Urgent Selling</div>}
        </div>
    
     
        <div className="p-5">
        
            <h5 className="my-6 text-base font-normal tracking-tight text-black w-[60%]">
              {item.title}
            </h5>
          
          <div className="flex justify-between items-center">
            <span className="text-2xl text-ccyan font-semibold">${item.price}</span>
            
           <span className="text-base text-cgray font-normal flex items-center justify-center"> <MdLocationOn/> <span>Cape Hadstone</span></span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
