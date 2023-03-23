import { lazy } from 'react'
import { getLoaderCommentByUser, getLoaderUsers, getLoaderUserById } from '../../../routes/functions';

//import pages
const Account = lazy(() => import('../index'))
const Error = lazy(() => import('../../Error'))
const Layout = lazy(() => import('../../Layout'))

//import account
const ListUsers = lazy(() => import('../components/Users'))
const DetailsUsers = lazy(() => import('../components/Details'))
const UserComment = lazy(() => import('../components/UserComment'))

export const accountRoutes = [
    {
        path: "/account",
        element: <Layout title='Accounts' />,
        errorElement: <Error />,
        children: [
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
                        loader: getLoaderUserById,
                        children: [
                            {
                                path: "/account/userdetails/:id/comments",
                                element: <UserComment />,
                                loader: getLoaderCommentByUser
                            }
                        ]
                    },
                ],
            }
        ]
    }
]