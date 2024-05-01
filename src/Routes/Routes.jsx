import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login.jsx';
import SignUp from "../Pages/singup/SignUp.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "login",
          element:<Login></Login>,
        },{
          path: "/signup",
          element:<SignUp></SignUp>
        }

      ]
    },
  ]);
  export default router;