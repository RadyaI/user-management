import { createBrowserRouter } from "react-router";
import User from "../user";
import statistik from "../statistik";

const router = createBrowserRouter([
    {
        path: "/",
        Component: User
    },
    {
        path: "/statistik",
        Component: statistik
    }
])

export default router