import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEAPIURL,  
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

export default axiosInstance;
