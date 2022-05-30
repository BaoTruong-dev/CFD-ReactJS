import React from "react";
import AuthenLayout from "../layout/AuthenLayout";
import MainLayout from "../layout/MainLayout";
import MainOrder from "../layout/MainOrder";
import PaymentLayout from "../layout/PaymentLayout";
import UpdateInfoLayout from "../layout/UpdateInfoLayout";
import AllOrders from "../pages/AllOrders";
import AllProducts from "../pages/AllProducts";
import ForgotPassword from "../pages/ForgotPassword";
import LoadingPage from "../pages/LoadingPage";
// import Home from "../pages/Home";
import Login from "../pages/Login";
// import OrderDetail from "../pages/OrderDetail";
import OrderSuccessfully from "../pages/OrderSuccessfully";
import PageNotFound from "../pages/PageNotFound";
// import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import UpdateInfo from "../pages/UpdateInfo";

const Home = React.lazy(() => import('../pages/Home'));
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
const OrderDetail = React.lazy(() => import('../pages/OrderDetail'));

const routers = [
    {
        path: '*',
        element: PageNotFound
    },
    {
        path: '/',
        element: MainLayout,
        routes: [
            {
                index: true,
                element: Home,
            },
            {
                path: "/allproducts",
                element: AllProducts
            }
        ]
    },
    {
        path: '/CFD-ReactJs',
        element: MainLayout,
        routes: [
            {
                index: true,
                element: Home,
            },
            {
                path: "/allproducts",
                element: AllProducts
            }
        ]
    },
    {
        path: '/loadingpage',
        element: LoadingPage,
    },
    {
        path: '/payment',
        element: PaymentLayout,
    },
    {
        path: '/authen',
        element: AuthenLayout,
        auth: false,
        routes: [
            {
                path: 'login',
                element: Login
            },
            {
                path: 'register',
                element: Register
            },
            {
                path: 'forgotpassword',
                element: ForgotPassword

            }
        ]
    },
    {
        path: '/user',
        element: UpdateInfoLayout,
        auth: true,
        routes: [
            {
                path: 'updateinformation',
                element: UpdateInfo,
            },
            {
                path: 'allorders',
                element: AllOrders
            },
        ]
    },
    {
        path: '/productdetail',
        element: ProductDetail
    },
    {
        path: '/order',
        element: MainOrder,
        routes: [
            {
                path: 'orders',
                element: OrderSuccessfully
            },
            {
                path: 'orderdetail',
                element: OrderDetail
            },
        ]
    },

];


export default routers;