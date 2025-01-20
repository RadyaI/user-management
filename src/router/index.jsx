import { createBrowserRouter } from "react-router";
import User from "../user";
import statistik from "../statistik";
import Login from '../login'

const router = createBrowserRouter([
    {
        path: "/",
        Component: User
    },
    {
        path: "/statistik",
        Component: statistik
    },
    {
        path: "login",
        Component: Login
    }
])

export default router