import { publicRequest } from "../requestAPI"
import { loginFailure, loginStart, loginSuccess, signupFailure, signupStart, signupSuccess } from "./userRedux"

export const login = async (dispatch,user)=>{

    dispatch(loginStart())
    try {

        const response = await publicRequest.post("/auth/login", user)
        dispatch((loginSuccess(response.data)))
        
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const signup = async (dispatch,user)=>{

    dispatch(signupStart())
    try {

        const response = await publicRequest.post("/auth/register", user)
        dispatch((signupSuccess(response.data)))
        
    } catch (error) {
        dispatch(signupFailure())
    }
}