import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout'
import AppProductos from "../Components/AppProductos";
import AppIngresos from "../Components/AppIngresos";
const Router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/productos",
                element: <AppProductos/>,
            },
            {
                path:"/ingresos",
                element: <AppIngresos/>,
            },
        ],
    }
])

export default Router;