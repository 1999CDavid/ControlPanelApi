import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout'
import AppProductos from "../Components/AppProductos";
import AppIngresos from "../Components/AppIngresos";
import AppPedidos from "../Components/AppPedidos";
import AppPromedios from "../Components/AppPromedios";
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
            {
                path:"/promedios",
                element: <AppPromedios/>,
            },
        ],
    }
])

export default Router;