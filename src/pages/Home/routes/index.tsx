import { lazy } from 'react'
import { getLoaderCommentByUser, getLoaderUsers, getLoaderUserById } from '../../../routes/functions';

//import pages
const Home = lazy(() => import('../index'))
const Error = lazy(() => import('../../Error'))
const Layout = lazy(() => import('../../Layout'))

//import components
const Users = lazy(() => import('../../../components/Users'))
const Comments = lazy(() => import('../../../components/Comments'))
const Details = lazy(() => import('../../../components/Details'))

export const homeRoutes = [
    {
        path: "/home",
        element: <Layout title='Nuevo title' />,
        errorElement: <Error />,
        children: [
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
                        loader: getLoaderUserById,
                        children: [
                            {
                                path: "/home/users/:id/comments",
                                element: <Comments />,
                                loader: getLoaderCommentByUser,
                            },
                        ]
                    }
                ]
            },
        ]
    },
]
