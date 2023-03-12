import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Commments from '../components/Comments'
import Customers from '../components/Customers'
import Details from '../components/Details'
import Invoices from '../components/Invoices'
import Overview from '../components/Overview'
import Subscriptions from '../components/Subscriptions'
import Users from '../components/Users'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Sales from '../pages/Sales'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/home/users",
                element: <Users />,
                loader: ({ request, params }) => {
                    return fetch('https://jsonplaceholder.typicode.com/users', { signal: request.signal })
                        .then(res => res.json())
                },
            },
            {
                path: "/home/users/:id",
                element: <Details />,
                loader: ({ request, params }) => {
                    console.log('loader id:', params.id)
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, { signal: request.signal })
                        .then(res => res.json())
                },
                children: [
                    {
                        path: "/home/users/:id/comments",
                        element: <Commments />,
                        loader: ({ request, params }) => {
                            console.log('loader id:', params.id)
                            return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/comments`, { signal: request.signal })
                                .then(res => res.json())
                        },
                    },
                ]
            }
        ]
    },
    {
        path: "/sales",
        element: <Sales />,
        errorElement: <Error />,
        children: [
            {
                path: "/sales/overview",
                element: <Overview />,
                action: async ({ request, params }) => {
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
            },
            {
                path: "/sales/subscriptions",
                element: <Subscriptions />
            },
            {
                path: "/sales/Invoices",
                element: <Invoices />
            },
            {
                path: "/sales/customers",
                element: <Customers />
            }
        ]
    }
])
