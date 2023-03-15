import { ActionFunctionArgs, json, LoaderFunctionArgs } from "react-router-dom";
import { getUserById, getUserCommentsById, getUsers, savePostLoader } from "../services/fetchApi";


export function getLoaderUsers({ request, params }: LoaderFunctionArgs): Promise<{} | null> {
    return getUsers({ signal: request.signal })
}

export function getLoaderUserById({ request, params }: LoaderFunctionArgs): Promise<{} | null> {

    return getUserById({ id: params.id ? params.id : '', signal: request.signal })
}

export function getLoaderCommentByUser({ request, params }: LoaderFunctionArgs): Promise<{} | null> {

    return getUserCommentsById({ id: params.id ? params.id : '', signal: request.signal })
}

export async function savePost({ request, params }: ActionFunctionArgs): Promise<{} | null> {
    switch (request.method) {
        case "POST": {
            let formData = await request.formData();
            const res = await savePostLoader({ body: formData, signal: request.signal })
            console.log('res: ', res)
            if (!res?.ok) {
                throw ('Error 404 bad request')
            }
            return res
        }
        default: {
            throw new Response("", { status: 405 });
        }
    }
}
