
import React from 'react';
import { GoChevronDown } from 'react-icons/go';

const SecondaryNav = () => {
  const navOptions = [
    "Books", "Electronics", "Real Estate", "Cars-bikes", "Dorm-furniture", "Men",
    "Women", "Music", "Hobbies Games", "Toys", "Kids"
  ];

  return (
    <div className="flex justify-center items-center h-[3.8125rem] bg-[#FFFFFF] shadow-[0_20px_39px_rgba(0,0,0,0.03)]">
      <div className="flex items-center">
        <span className="mr-[0.0625rem]">All Categories</span>
        <GoChevronDown />
      </div>
      <div>
        <ul className="list-none flex items-center">
          {navOptions.map((item, i) => {
            return (
              <li className="px-[0.5rem] sm:px-[1rem] text-[#4D4D4D] text-base" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryNav;
