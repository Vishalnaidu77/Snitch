import { createBrowserRouter } from "react-router-dom";
import Register from "../features/auth/pages/register";
import Login from "../features/auth/pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Radhe Radhe</h1>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    }
])