import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login.jsx';
import SignUp from "../Pages/singup/SignUp.jsx";
import BookService from "../Pages/CheckOut/BookService.jsx";
import Booking from "../Pages/Booking/Booking.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
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
      },{
        path: "bookings",
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }

    ]
  },
]);
export default router;