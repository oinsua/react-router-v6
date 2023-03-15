import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react';

import Login from '../pages/Login'
import { homeRoutes } from '../pages/Home/routes';
import { salesRoutes } from '../pages/Sales/routes';
import { accountRoutes } from '../pages/Account/routes';

//import pages
const Error = lazy(() => import('../pages/Error'))


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <Error />
    },
    ...homeRoutes,
    ...salesRoutes,
    ...accountRoutes
])
