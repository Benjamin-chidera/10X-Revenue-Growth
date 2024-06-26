import axios from "axios";
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const axiosInstance = axios.create({
baseURL: baseUrl
});

export default axiosInstance;