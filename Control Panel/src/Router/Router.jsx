import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout'
import AppProductos from "../Components/AppProductos";
import AppIngresos from "../Components/AppIngresos";
import AppPedidos from "../Components/AppPedidos";
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
            {
                path:"/pedidos",
                element: <AppPedidos/>,
            },
        ],
    }
])

export default Router;