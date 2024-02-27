import {createBrowserRouter} from 'react-router-dom';
import Dashboard from './modules/dashboard';
import DashboardError from './modules/dashboard/error';
import ProfileComponent from './modules/profile';
import ProfileError from './modules/profile/error';
import NotFoundError from './modules/error';
import SignIn from './modules/auth/components/signInn';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard/>,
        errorElement: <DashboardError/>
    },
    {
        path:'/profile',
        element: <ProfileComponent/>,
        errorElement: <ProfileError/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
        path:"*",
        element:<NotFoundError/>

    }
]);