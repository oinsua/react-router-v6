import { lazy } from 'react'

//import pages
const Files = lazy(() => import('../index'))
const Error = lazy(() => import('../../Error'))
const Layout = lazy(() => import('../../Layout'))

export const filesRoutes = [
    {
        path: "/file",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/file",
                element: <Files />,
            }
        ]
    }
]