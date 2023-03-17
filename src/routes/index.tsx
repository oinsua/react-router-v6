import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react';

import { homeRoutes } from '../pages/Home/routes';
import { salesRoutes } from '../pages/Sales/routes';
import { accountRoutes } from '../pages/Account/routes';
import { filesRoutes } from '../pages/Files/routes';
import App from '../App';

//import pages
const Error = lazy(() => import('../pages/Error'))


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    ...homeRoutes,
    ...salesRoutes,
    ...accountRoutes,
    ...filesRoutes
])
