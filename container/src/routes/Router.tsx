import { createBrowserRouter, Outlet } from "react-router-dom";
import { About } from "../pages/About/About";
import { Header } from "../components/Header/Header";



export const Router = createBrowserRouter([
    {
        path: "",
        element: <><Header/><Outlet/></>,
        children: [
            {
                path: "",
                element: <About/>,
            },
        ]
    },
])