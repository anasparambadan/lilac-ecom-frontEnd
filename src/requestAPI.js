import axios from "axios";

const BASE_URL = "https://lilac-ecom.onrender.com";

// const token = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).token:null
// console.log(token,'token......')



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  // headers: { authorization: `Bearer ${token}` },
});
userRequest.interceptors.request.use((req)=>{
  if(localStorage.getItem('user')){
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
  }
  return req;
})
