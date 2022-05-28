import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import orderDetailReducer from './orderDetailReducer';
import productsReducer from './productsReducer';

import rootSaga from './rootSaga';
import productDetailsReducer from './productDetailsReducer';
import loadingReducer from './loadingReducer';
const reducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    order: orderReducer,
    orderDetail: orderDetailReducer,
    loading: loadingReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);


store.dispatch({
    type: 'GET_PROFILE'
});
store.dispatch({
    type: 'GET_PRODUCTS'
});
store.dispatch({
    type: 'GET_ALL_ORDER'
});


export default store;