import axios from "axios"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
export const BASE_URL =  "http://localhost:5000/api/" || process.env.REACT_APP_API_URL 

//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Y1NWQzZTBhZjdjNDliNWM2MjFjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDk2NzQ3MSwiZXhwIjoxNjU1MjI2NjcxfQ.xYilhmn3hFSnxGQEfj6-rq001B-2MR22jxpzXnqHnzc"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})