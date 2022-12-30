import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home/:name",
        element: <Home></Home>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/home/${params.name}`),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
