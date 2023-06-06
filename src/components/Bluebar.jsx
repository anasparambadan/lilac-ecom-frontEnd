import React from "react";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/envelope.png";
import down from "../assets/icons/down.png";
import location from "../assets/icons/location.png";
const Bluebar = () => {
  return (
 

    <div className="h-[3.3125rem] w-full bg-cblue flex items-center justify-between px-16">
      <div className="flex items-center justify-between gap-[4.0625rem]">
        <div className="flex items-center justify-between gap-[0.9375rem]">
          <span>
            <img src={phone} alt="" />
          </span>
          <span className="text-base font-semibold text-white">
            +221 33 66 22
          </span>
        </div>

        <div className="flex items-center justify-between gap-[0.9375rem]">
          <span>
            <img src={mail} alt="" />
          </span>
          <span className="text-base font-semibold text-white">
            support@elextra.io
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[1.125rem]">
        <div className="flex items-center gap-[1.125rem]">
          <span>
            <img src={location} alt="" />
          </span>
          <span className="text-base font-semibold text-white">Locations</span>
        </div>
        <div className="h-[1.9375rem] border-l-white border-l-[0.125rem]"></div>

        <div className="flex items-center gap-[0.25rem]">
          <span className="text-base font-semibold text-white">
            $ Dollar (US)
          </span>
          <span>
            <img src={down} alt="" />
          </span>
        </div>

        <div className="flex items-center gap-[0.25rem]">
          <span className="text-base font-semibold text-white">EN</span>
          <span>
            <img src={down} alt="" />
          </span>
        </div>
      </div>
    </div>
   
  );
};

export default Bluebar;
