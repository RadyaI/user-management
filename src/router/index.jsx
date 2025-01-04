import { createBrowserRouter } from "react-router";
import User from "../user";
import Food from "../food";

const router = createBrowserRouter([
    {
        path: "/",
        Component: User
    },
    {
        path: "/food",
        Component: Food
    }
])

export default router