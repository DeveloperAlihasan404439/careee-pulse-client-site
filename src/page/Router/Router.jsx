import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";
import LogIn from "../Authentication/LogIn/LogIn";
import SingUp from "../Authentication/SingUp/SingUp";
import DatelisCatagory from "../../companent/Catagoreis/DatelisCatagory";
import MyBids from "../MyBids/MyBids";
import AddJobs from "../AddJobs/AddJobs";
import MyPostedJobs from "../MyPostedJobs/MyPostedJobs";
import Updated from "../MyPostedJobs/Update/Updated";
import RoutError from "../RoutError/RoutError";
import BidRequest from "../MyBids/BidRequest";
import ProviteRout from "../Authentication/ProviteRout/ProviteRout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RoutError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: (
          <ProviteRout>
            <DatelisCatagory />
          </ProviteRout>
        ),
        loader: ({ params }) =>
          fetch(`https://serverlite-assignament.vercel.app/catagorys/${params.id}`),
      },
      {
        path: "/addjobs",
        element: (
          <ProviteRout>
            <AddJobs />
          </ProviteRout>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <ProviteRout>
            <MyPostedJobs />
          </ProviteRout>
        ),
      },
      {
        path: "/myPostedJobs/:id",
        element: <Updated />,
        loader: ({ params }) =>
          fetch(`https://serverlite-assignament.vercel.app/${params.id}`),
      },
      {
        path: "/myBids",
        element: (
          <ProviteRout>
            <MyBids />
          </ProviteRout>
        ),
      },
      {
        path: "/bidRequest",
        element: (
          <ProviteRout>
            <BidRequest />
          </ProviteRout>
        ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/sinup",
        element: <SingUp />,
      },
    ],
  },
]);
