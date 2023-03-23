import { lazy } from 'react'
import { savePost } from '../../../routes/functions';

//import pages
const Sales = lazy(() => import('../index'))
const Error = lazy(() => import('../../Error'))
const Layout = lazy(() => import('../../Layout'))

//import components
const Customers = lazy(() => import('../../../components/Customers'))
const Invoices = lazy(() => import('../../../components/Invoices'))
const Overview = lazy(() => import('../../../components/Overview'))
const Subscriptions = lazy(() => import('../../../components/Subscriptions'))

export const salesRoutes = [
    {
        path: "/sales",
        element: <Layout title='Sales' />,
        errorElement: <Error />,
        children: [
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
        ]
    }
]