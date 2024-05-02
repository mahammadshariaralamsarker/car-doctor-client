import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login.jsx';
import SignUp from "../Pages/singup/SignUp.jsx";
import BookService from "../Pages/CheckOut/BookService.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      }, {
        path: "/signup",
        element: <SignUp></SignUp>
      }, {
        path: "checkout/:id",
        element: <BookService></BookService>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      }

    ]
  },
]);
export default router;