import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { instance } from '../interceptors';

export type RequestData<T> = {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: T;
    headers?: AxiosRequestConfig['headers'];
    params?: AxiosRequestConfig['params'];
    signal?: AxiosRequestConfig['signal'];
};

export type ResponseData<T> = {
    data: T;
    status: number;
    statusText: string;
};

export async function httpRequest<T>(
    requestData: RequestData<T>
): Promise<ResponseData<T>> {
    try {
        const response: AxiosResponse<T> = await instance(requestData);
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText
        };
    } catch (error: AxiosError | any) {
        if (error.response) {
            throw new Error(error.response.data);
        }
        throw new Error(error.message);
    }
}
