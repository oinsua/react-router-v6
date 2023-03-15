import { createBrowserRouter } from 'react-router-dom'
import { getCommentByUser, getLoaderUsers, getUserById, savePost } from './functions';

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
import Account from '../pages/Account';
import ListUsers from '../pages/Account/components/Users';
import DetailsUsers from '../pages/Account/components/Details';
import UserComment from '../pages/Account/components/UserComment';

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
                loader: getLoaderUsers,
            },
            {
                path: "/home/users/:id",
                element: <Details />,
                loader: getUserById,
                children: [
                    {
                        path: "/home/users/:id/comments",
                        element: <Commments />,
                        loader: getCommentByUser,
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
                action: savePost
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
    },
    {
        path: "/account",
        element: <Account />,
        errorElement: <Error />,
        children: [
            {
                path: "/account/users",
                element: <ListUsers />,
                loader: getLoaderUsers,
            },
            {
                path: "/account/userdetails/:id",
                element: <DetailsUsers />,
                loader: getUserById,
                children: [
                    {
                        path: "/account/userdetails/:id/comments",
                        element: <UserComment />,
                        loader: getCommentByUser
                    }
                ]
            },
        ],
    }
])
