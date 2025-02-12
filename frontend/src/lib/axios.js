import axios from 'axios'

//this is needed for cookies sharing
export const axiousInstance = axios.create({
    baseURL: import.meta.env.NODE_ENV ==="development" ? "http://localhost:5002/" : "/",
    withCredentials: true
})