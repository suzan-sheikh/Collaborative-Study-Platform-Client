import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import SessionDetails from "../Pages/Home/Session/SessionDetails";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import DashboardLayout from "../Layout/DashboardLayout";
import MyBookings from "../Pages/Dashboard/Student/BookedSession/MyBookings";
import SessionDetailed from "../Pages/Dashboard/Student/BookedSession/SessionDetailed";
import CreateNote from "../Pages/Dashboard/Student/CreateNote/CreateNote";
import ManageNote from "../Pages/Dashboard/Student/ManageNote/ManageNote";
import CreateSession from "../Pages/Dashboard/Tuto/CreateSession/CreateSession";
import ViewAllSession from "../Pages/Dashboard/Tuto/ViewAllSession/ViewAllSession";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageSession from "../Pages/Dashboard/Admin/AllSession/ManageSession";
import ViewMaterials from "../Pages/Dashboard/Tuto/ViewMaterials/ViewMaterials";
import ManageMaterials from "../Pages/Dashboard/Admin/ManageMaterials/MangageMaterials";
import ViewApprovedSession from "../Pages/Dashboard/Tuto/UploadMaterials/ViewApprovedSession/ViewApprovedSession";
import UploadMaterials from "../Pages/Dashboard/Tuto/UploadMaterials/UploadMaterials";
import UpdateMaterials from "../Pages/Dashboard/Tuto/ViewMaterials/UpdateMaterials";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateNote from "../Pages/Dashboard/Student/ManageNote/UpdateNote";
import ViewStudentMaterials from "../Pages/Dashboard/Student/ViewMaterials/ViewStudentMaterials";
import ShowMaterials from "../Pages/Dashboard/Student/ViewMaterials/ShowMaterials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
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
          path: '/session-details/:id',
          element: <PrivateRoute><SessionDetails/></PrivateRoute>
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
      }
      ,{
        path: 'my-bookings',
        element: <MyBookings/>
      }
      ,{
        path: 'ShowMaterials/:id',
        element: <ShowMaterials/>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/getBookingToID/${params.id}`)        
      }
      ,{
        path: 'createNote',
        element: <CreateNote/>
      }      
      ,{
        path: 'manageNote',
        element: <ManageNote/>
      },      
      {
        path: 'updateNote/:id',
        element: <UpdateNote/>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/noteToID/${params.id}`)
      }
      ,{
        path: 'student-material',
        element: <ViewStudentMaterials/>
      }
      ,{
        path: 'studentSessionDetailed/:id',
        element: <SessionDetailed/>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/getBookingToID/${params.id}`)        
      },
      {
        path: 'createSession',
        element: <CreateSession/>
      },
      {
        path: 'allSession',
        element: <ViewAllSession/>
      },
      {
        path: 'uploadMaterials',
        element: <ViewApprovedSession/>
      },
      {
        path: 'uploadMaterials/:id',
        element: <UploadMaterials/>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/getToID/${params.id}`)
      },
      {
        path: 'viewMaterials',
        element: <ViewMaterials/>
      }
      ,{
        path: 'manageUsers',
        element: <ManageUsers/>
      },
      {
        path: 'manageSession',
        element: <ManageSession/>
      },
      {
        path: 'manageMaterials',
        element: <ManageMaterials/>
      },
      {
        path: 'updateMaterial/:id',
        element: <UpdateMaterials/>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/materialToID/${params.id}`)
      },
    ]
  }
]);
