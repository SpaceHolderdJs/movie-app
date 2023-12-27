import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://movie-app-be-um72.onrender.com/'
});