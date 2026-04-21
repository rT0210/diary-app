import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import AddNewDay from "../pages/addNewDay/AddNewDay";
import SimpleLayout from "../components/simpleLayout/SimpleLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    element: <SimpleLayout />,
    children: [{ path: "addNewDay", element: <AddNewDay /> }],
  },
]);
