import React from "react";
import { FaStar } from "react-icons/fa";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decremntStock } from "../API/cartApi";

const DealsCard = ({ product }) => {
  const userId = useSelector(state=>state.user.currentUser.user._id)

  const dispatch = useDispatch();
  const handleClick = async() => {
    await decremntStock(product._id)
    dispatch(addProduct({...product,quantity:1}))
    const cart = await addToCart(userId,product._id)


  };
  return (
    <div className="w-72 max-w-sm flex flex-col items-start gap-5">
      <div className=" grid grid-cols-[117px_auto] gap-4">
        <div className="">
          <img src={`src/assets/images/${product.image}`} alt="" />
        </div>
        <div className="flex flex-col justify-between ">
          <div className="text-base font-normal text-black">
            {product.productName}
          </div>
          <div>
            <span className="font-medium text-lg">Stock :</span>{" "}
            <span className="">{product.stock}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl text-cblue">${product.price}</span>
            <span className="text-cblue flex items-center justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-base text-cgray">(12)</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-ccyan rounded-lg text-white px-[50%] py-2 whitespace-nowrap ml-5"
          onClick={handleClick}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default DealsCard;
