import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import SessionDetails from "../Pages/Home/Session/SessionDetails";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Common/Profile";
import MyBookings from "../Pages/Dashboard/Student/MyBookings";
import SessionDetailed from "../Pages/Dashboard/Student/SessionDetailed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: '/session-details',
          element: <SessionDetails/>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        index: true,
        element: <Statistics/>        
      },
      {
        path: 'profile',
        element: <Profile/>
      }
      ,{
        path: 'my-bookings',
        element: <MyBookings/>
      }
      ,{
        path: 'studentSessionDetailed',
        element: <SessionDetailed/>
      }
    ]
  }
]);
