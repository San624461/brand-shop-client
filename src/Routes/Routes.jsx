import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;