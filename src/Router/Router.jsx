import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout'
import AppProductos from "../Components/AppProductos";
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