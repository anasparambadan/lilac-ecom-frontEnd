import { publicRequest, userRequest } from "../requestAPI";

export const addToCart = (userId,productId)=> userRequest.post('/cart',{userId,productId})
export const decremntStock = (productId)=> publicRequest.put("/product/dec",{productId})
export const incrementStock = (productId)=> publicRequest.put("/product/inc",{productId})