import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";


export const instance = axios.create();

instance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        // Do something before the request is sent

        console.log('Making request to:', config.url);
        return config;
    },
    (error: AxiosError) => {
        // Do something with request error

        console.error(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Do something with response data

        console.log('Received response with status:', response.status);
        return response;
    },
    (error: AxiosError) => {
        // Do something with response error

        console.error(error);
        return Promise.reject(error);
    }
);