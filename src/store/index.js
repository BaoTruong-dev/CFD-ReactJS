import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

import rootSaga from './rootSaga';
const reducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
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

export default store;