import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from './src/Layout';
import Team from './src/pages/Team'
import Standings from './src/pages/Standings';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [{
            path: "/",
            default: true,
            element: <Standings />,
        }, {
            path: "team/:id",
            element: <Team />,
        }]
    }
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <RouterProvider router={router}>
        <Layout />
    </RouterProvider>
)
