import { createBrowserRouter } from "react-router";
import User from "../user";
import statistik from "../statistik";
import Login from '../login'
import Auth from "../Auth";

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
        path: "/login",
        Component: Login
    },
    {
        path: "/auth",
        Component: Auth
    }
])

export default router