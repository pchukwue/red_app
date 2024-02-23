import {createBrowserRouter} from 'react-router-dom';
import Dashboard from './modules/dashboard';
import DashboardError from './modules/dashboard/error';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard/>,
        errorElement: <DashboardError/>
    }
]);