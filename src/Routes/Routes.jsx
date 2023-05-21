import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/pages/Main/Home/Home/Home";
import Main from "../Layout/pages/Main/Main";
import Login from "../Layout/pages/Main/Login/Login";
import Register from "../Layout/pages/Main/Register/Register";
import ErrorPage from "../Layout/pages/ErrorPage/ErrorPage";
import Blog from "../Layout/pages/Blog/Blog";
import AllToy from "../Layout/pages/AllToy/AllToy";
import LegosData from "../Layout/pages/AllToy/LegosData/LegosData";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allToy',
          element: <AllToy></AllToy>
        },
        {
          path: '/legosData',
          element: <LegosData></LegosData>
        }
      ]
    },
  ]);

  export default router;