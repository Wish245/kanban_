import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // change to your backend
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // if using cookies/auth tokens
});

export default axiosInstance;