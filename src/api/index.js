import axios from "axios";
import { servicesVersion } from "typescript";

const service = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    timeout: Config.SERVER_TIMEOUT,
});

services.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
