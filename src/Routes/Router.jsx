import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

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
        }
    ]
  },
]);
