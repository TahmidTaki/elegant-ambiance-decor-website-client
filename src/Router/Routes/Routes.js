import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import AddServiceProtected from "../../Pages/Protected/AddServiceProtected";
import MyReviewProtected from "../../Pages/Protected/MyReviewProtected";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
// import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";
import EditReview from "../../Pages/UserSpecificReview/EditReview/EditReview";
import UserSpecificReview from "../../Pages/UserSpecificReview/UserSpecificReview";

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
        path: "/allservices",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myreview",
        element: (
          <MyReviewProtected>
            <UserSpecificReview></UserSpecificReview>
          </MyReviewProtected>
        ),
      },
      {
        path: "/addservice",
        element: (
          <AddServiceProtected>
            <AddService></AddService>
          </AddServiceProtected>
        ),
      },
      {
        path: "/editReview/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
      },
    ],
  },
]);

export default router;
