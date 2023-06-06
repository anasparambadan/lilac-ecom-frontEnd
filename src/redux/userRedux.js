import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false,
            state.currentUser = action.payload
            localStorage.setItem("user", JSON.stringify({ ...action?.payload }))
        },
        loginFailure:(state)=>{
            state.isFetching = false,
            state.error = true
        },
        signupStart:(state)=>{
            state.isFetching = true
        },
        signupSuccess:(state,action)=>{
            state.isFetching = false,
            state.currentUser = action.payload,
            localStorage.setItem("user", JSON.stringify({ ...action?.payload }))
        },
        signupFailure:(state)=>{
            state.isFetching = false,
            state.error = true
        },
        logOut :(state)=>{
            state.currentUser = null,
            state.isFetching = false
        }
       
    }
})

export const {loginStart,loginSuccess,loginFailure,signupStart,signupSuccess,signupFailure,logOut} = userSlice.actions
export default userSlice.reducer