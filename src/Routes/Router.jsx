import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";
import WatchList from "../pages/WatchList";
import PrivateRouter from "../private/PrivateRouter";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chill-gamer-server-dusky.vercel.app/games"),
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
        element: (
          <PrivateRouter>
            <AddReview></AddReview>
          </PrivateRouter>
        ),
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch("https://chill-gamer-server-dusky.vercel.app/review"),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-dusky.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/my-review",
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-dusky.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRouter>
            <WatchList></WatchList>,
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
