import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
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
// import FruitAVegetables from './pages/FruitAVegetables';
// import Home from './pages/Home';
import Login from './pages/Login';
import OrderSuccessfully from './pages/OrderSuccessfully';
import Products from './pages/Products';
import Register from './pages/Register';
import UpdateInfo from './pages/UpdateInfo';
import store from './store';

const Home = React.lazy(() => import('./pages/Home'));
const FruitAVegetables = React.lazy(() => import('./pages/FruitAVegetables'));


function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/fruitandvegetables" element={<FruitAVegetables />} />
            </Route>
            <Route path="/payment" element={<PaymentLayout />}>
            </Route>
            <Route path="/authen" element={<AuthenLayout />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>
            <Route path="/user" element={<UpdateInfoLayout />}>
              <Route path="update" element={<UpdateInfo />}></Route>
            </Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path='/order'>
              <Route path='orders' element={<OrderSuccessfully />}></Route>
            </Route>
          </Routes>
        </Suspense>

      </Provider>
    </>
  );
}

export default App;
