import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";

import ErrorPage from "../Pages/ErrorPage";
import BrandProducts from "../Pages/BrandProducts";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Pages/Register";
import Update from "../Pages/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/addproduct',
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>

            },
            {
                path: "/products/brand/:brandName",
                element: <BrandProducts />,

            },
            {
                path: "/products/:productId",
                element: <PrivateRoute> <ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-hvckvfhh7-sans-projects-f62f7a6a.vercel.app/products/${params.productId}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-server-hvckvfhh7-sans-projects-f62f7a6a.vercel.app/cart')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-server-hvckvfhh7-sans-projects-f62f7a6a.vercel.app/update/${params.id}`)
            }
        ]
    }
])

export default router;