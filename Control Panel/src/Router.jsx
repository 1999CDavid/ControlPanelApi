import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import AppProductos from "./Productos/AppProductos";
const Router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/productos",
                element: <AppProductos/>,
            },
            
        ],
    }
])

export default Router;