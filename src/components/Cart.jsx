import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { removeProduct } from "../redux/cartRedux";
import { incrementStock } from "../API/cartApi";

const Cart = () => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const products = cart.products;
  
  const onClick = async(price, index,productId) => {
    dispatch(removeProduct({price,index}))
    await incrementStock(productId)

}

  return (
    <div>
    <Header/>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className=" text-center text-2xl font-bold text-cblue">My cart</h1>
        <div className="mx-auto max-w-5xl mt-6 justify-center px-6 md:flex md:space-x-6 xl:px-0 h-[85%] relative ">
          <div className="rounded-lg md:w-2/3 overflow-y-scroll carts" >
            {products.map((product,index) => {

              return (
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={index}>
                
                  <img
                    src={`src/assets/images/${product.image}`}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.productName}
                      </h2>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <MdDeleteForever className="text-cblue mx-auto cursor-pointer hover:text-red-700 " size={20} onClick={() => onClick(product.price, index, product._id)} />
                      <div className="flex items-center border-gray-100">
                     
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm  mx-auto text-ccyan">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-1/2 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-ccyan">{cart.total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-ccyan ">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-ccyan">${cart.total + 4.99}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-ccyan py-1.5 font-medium text-blue-50  shadow-[0_2px_30px_rgba(0,198,215,0.25)]">
              Check out
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
