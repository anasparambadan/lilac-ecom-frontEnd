import React, { useEffect, useState } from "react";
import DealsCard from "./DealsCard";
import { publicRequest } from "../requestAPI";
import axios from "axios";
import { useSelector } from "react-redux";




const BestDeals = () => {
  const quantity = useSelector((state) => state.cart.quantity)

  const [products, setProducts] = useState([])


useEffect(() => {

  const getProducts = async()=>{
    const response = await publicRequest.get('/product')
    setProducts(response.data)

  }
  getProducts()
  
}, [quantity])





  return (
    <div className="flex flex-col gap-12 justify-around px-28 py-10">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-semibold">Best Deals</span>
        <span className="text-xl font-semibold text-cblue">View all</span>
      </div>
      <div className="grid grid-cols-5 gap-20">
        {products.map((product,i) => {
          return (
            <DealsCard
              product = {product}
              key={product._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestDeals;
