import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router-dom";


export function getLoaderUsers({ request, params }: LoaderFunctionArgs): Promise<{} | null> {
    return fetch('https://jsonplaceholder.typicode.com/users', { signal: request.signal })
        .then(res => res.json())
}

export function getUserById({ request, params }: LoaderFunctionArgs): Promise<{} | null> {

    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, { signal: request.signal })
        .then(res => res.json())
}

export function getCommentByUser({ request, params }: LoaderFunctionArgs): Promise<{} | null> {

    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/comments`, { signal: request.signal })
        .then(res => res.json())
}

export async function savePost({ request, params }: ActionFunctionArgs): Promise<{} | null> {
    switch (request.method) {
        case "POST": {
            let formData = await request.formData();
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "POST",
                body: formData
            })
            console.log('res: ', res)
            if (!res?.ok) {
                throw ('Error 404 bad request')
            }

        }
        default: {
            throw new Response("", { status: 405 });
        }
    }
}
