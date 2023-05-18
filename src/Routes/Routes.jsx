import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/pages/Main/Home/Home/Home";
import Main from "../Layout/pages/Main/Main";
import Login from "../Layout/pages/Main/Login/Login";

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
        }
      ]
    },
  ]);

  export default router;