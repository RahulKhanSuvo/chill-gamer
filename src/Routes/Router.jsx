import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import MyReviews from "../pages/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/games"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-review",
        element: <AddReview></AddReview>,
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("http://localhost:4000/review"),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/review/${params.id}`),
      },
      {
        path: "/my-review",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
]);
export default router;
