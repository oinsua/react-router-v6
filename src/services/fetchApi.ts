import { httpRequest, RequestData } from "../core/http";
import { User } from "../model/user.model";

export const getUsers = async ({ signal }: { signal: any }): Promise<User> => {
    const requestData: RequestData<User> = {
        url: `https://jsonplaceholder.typicode.com/users`,
        method: 'GET',
        signal
    };
    const response = await httpRequest<User>(requestData);
    return response.data;
}

type props = {
    id: string;
    signal: any;
}

export const getUserById = ({ id, signal }: props) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
        .then(res => res.json())
}

export const getUserCommentsById = ({ id, signal }: props) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`, { signal })
        .then(res => res.json())
}

type PropsPost = {
    body: FormData;
    signal: any;
}

export const savePostLoader = ({ body, signal }: PropsPost) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body,
        signal,
    })
}