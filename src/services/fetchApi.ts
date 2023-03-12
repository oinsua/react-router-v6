
export const getUsers = ({ signal }: { signal: any }) => {
    return fetch('https://jsonplaceholder.typicode.com/users', { signal })
        .then(res => res.json())
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