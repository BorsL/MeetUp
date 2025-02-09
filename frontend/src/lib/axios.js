import axios from 'axios'

//this is needed for cookies sharing
export const axiousInstance = axios.create({
    baseURL: "http://localhost:5002/",
    withCredentials: true
})