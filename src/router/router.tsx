import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from '../pages/home/Home';
import AddNewDay from "../pages/addNewDay/AddNewDay";

export const router = createBrowserRouter([
    {path: "/", element: <Layout />, children: [
        {index: true, element: <Home />},
        {path: "addNewDay", element: <AddNewDay />}
    ]}
])

