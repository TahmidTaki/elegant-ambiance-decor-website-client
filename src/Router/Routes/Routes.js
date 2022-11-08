import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/review/:id",
        element: <Review></Review>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
