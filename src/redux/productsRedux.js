import {createSlice} from '@reduxjs/toolkit'

const products = createSlice({
    name:"products",
    initialState:{
        products:[],
    },
    reducers:{
        getProducts : (state,action)=>{
            state.products.push(action.payload)
        },
        increment:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload),
            state.total += action.payload.price
        },
        decrement:{

        }
        
    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer