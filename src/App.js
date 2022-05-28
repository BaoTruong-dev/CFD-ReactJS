import React, { Suspense } from 'react';
import { Provider, useSelector } from 'react-redux';
import logo from './assets/imgs/coffee.png';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './app.scss';
import './assets/styles/style.scss';
import './index.css';
import AuthenLayout from './layout/AuthenLayout';
import MainLayout from './layout/MainLayout';
import PaymentLayout from './layout/PaymentLayout';
import UpdateInfoLayout from './layout/UpdateInfoLayout';
import AllOrders from './pages/AllOrders';
// import OrderDetail from './pages/OrderDetail';
// import FruitAVegetables from './pages/FruitAVegetables';
// import Home from './pages/Home';
import Login from './pages/Login';
import OrderSuccessfully from './pages/OrderSuccessfully';
import Register from './pages/Register';
// import UpdateInfo from './pages/UpdateInfo';
import store from './store';
import PageNotFound from './pages/PageNotFound';
import { Navigate } from 'react-router-dom';
import routerConfig from './utilities/routerConfig';
import routers from './constant/router';
import AllProducts from './pages/AllProducts';
import LoadingPage from './pages/LoadingPage';
import ScrollToTop from './utilities/ScrollToTop';
import ProductDetail from './pages/ProductDetail';
const Home = React.lazy(() => import('./pages/Home'));
const UpdateInfo = React.lazy(() => import('./pages/UpdateInfo'));
const FruitAVegetables = React.lazy(() => import('./pages/FruitAVegetables'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail'));

function App() {
  const { auth: { login } } = useSelector(store => store);
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        {/* <ScrollToTop>
          <Routes>
            <Route path='*' element={<PageNotFound />}></Route>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} element={<Home />} />
              <Route path="/allproducts" element={<AllProducts />} />
            </Route>
            <Route path="/payment" element={<PaymentLayout />}>
            </Route>
            <Route path="/authen">
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>
            <Route path="/user" element={<UpdateInfoLayout />}>
              <Route path="updateinformation" element={<UpdateInfo />}></Route>
              <Route path='allorders' element={<AllOrders />}></Route>
            </Route>
            <Route path='/order'>
              <Route path='orders' element={<OrderSuccessfully />}></Route>
              <Route path='orderdetail' element={<OrderDetail />}></Route>
            </Route>
            <Route path="/productdetail" element={<ProductDetail />} />
          </Routes>
        </ScrollToTop> */}
        <Routes>
          {routerConfig(routers)}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
