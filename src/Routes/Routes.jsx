import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/pages/Main/Home/Home/Home";
import Main from "../Layout/pages/Main/Main";
import Login from "../Layout/pages/Main/Login/Login";
import Register from "../Layout/pages/Main/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
  ]);

  export default router;