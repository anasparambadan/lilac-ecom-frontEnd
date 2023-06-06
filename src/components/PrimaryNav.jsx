import React from "react";
import hero from "../assets/icons/hero.png";
import { GrFormSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {VscHeart} from 'react-icons/vsc'
import {BsBasket} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import { logOut } from "../redux/userRedux";


const PrimaryNav = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch =  useDispatch()
  const handleClick = ()=>{
    dispatch(logOut())
  }
  return (
    <div className="h-36 w-full bg-[#FFFFFF]">
      <div className="flex items-center justify-between px-16">
        {/* hero icon */}
        <Link to={"/home"}>
          <span>
            <img src={hero} alt="" />
          </span>
        </Link>

        <div className="flex items-center gap-[11px]">
          {/* Dropdown menu */}
          <div>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex h-[70px] justify-center items-center gap-x-[54px] rounded-xl bg-[#F8F8F8] px-3 py-2 w-[246px] text-xl font-font-medium text-[#4D4D4D] shadow-sm  ring-0 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Classifieds
                  <svg
                    className="-mr-1 h-[28px] w-[28px] text-[4D4D4D]]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

            
            </div>
          </div>
          {/* search bar */}

          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="inline-flex h-[70px] justify-center items-center gap-x-[54px] rounded-xl bg-[#F8F8F8] px-3 py-2 w-[554px] text-xl font-font-medium text-[#4D4D4D] shadow-sm  ring-0 hover:bg-gray-50 focus:outline-0"
            />
            <span className="absolute text-cblue top-[25px] right-[23px]">
              <GrFormSearch size={30} className="" />
            </span>
          </div>
        </div>

        {/* nav icons */}

        <div className="flex items-center justify-center gap-[54px]">
          <span>
 
            <VscHeart className="text-gray-500" size={25}/>
          </span>
          <Link to={"/cart"}>
            <span className="relative">
      
              <BsBasket className="text-gray-500" size={25}/>
              <span className="bg-cblue rounded-full  px-2 py-0.5 text-white text-sm font-bold absolute -top-4 -right-3">
                {quantity}
              </span>
            </span>
          </Link>
          <span>

            <FaUserCircle className = "text-gray-500" size={25}/>
            <div onClick={handleClick}>Logout</div>
          </span>
        </div>

        {/* button */}
        <div>
          <button className="text-lg text-white font-bold w-[102] h-[27] bg-ccyan px-[31px] py-[20px] rounded-xl shadow-[0_11px_27px_rgba(0,198,215,0.35)]">
            Classifieds
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
