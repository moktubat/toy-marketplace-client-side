import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/pages/Main/Home/Home/Home";
import Main from "../Layout/pages/Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;