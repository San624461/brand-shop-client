import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";

import ErrorPage from "../Pages/ErrorPage";
import BrandProducts from "../Pages/BrandProducts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>

            },
            {
                path:"/products/brand/:brandName",
                element: <BrandProducts/>,
               
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;