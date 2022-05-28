import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import authService from '../services/authService';
import cartService from '../services/cartService';
import orderService from '../services/orderService';
import productDetailsService from '../services/productDetailsService';
import productsService from '../services/productsService';
import userService from '../services/userService';
function* fetchLogin(action) {
    try {
        let result = yield call(authService.login, action.payload);
        localStorage.setItem('token', JSON.stringify(result.data));
        yield put({ type: 'GET_PROFILE' });
        yield put({ type: 'GET_ALL_ORDER' });
    }
    catch (error) {
        // yield put({ type: 'FAILED_LOGIN', message: error.message });
        console.log('login-failed');
    }
}

function* clearCart() {
    try {
        yield put({ type: 'CLEAR_CART' });
    } catch (error) {

    }
}

function* fetchGetProfile() {
    try {
        let token = localStorage.getItem('token');
        if (token) {
            let result = yield call(userService.getInfo);
            yield put({ type: 'SET_PROFILE', payload: result.data });
        }
    }
    catch (error) {
        console.log('getProfile-failed');

    }
}

function* fetchUpdateInfo(action) {
    try {
        let result = yield call(userService.updateInfo, action.payload);
        if (result.updateCount) {
            yield put({
                type: 'SET_PROFILE',
                payload: action.payload
            });
        }
    }
    catch (error) {
        console.log('failed-update');
    }
}

function* fetchRegister(action) {
    try {
        let result = yield call(authService.register, action.payload);
        if (result.data) {
            yield put({ type: 'FAILED_REGISTER', error: '' });
        } else {
            yield put({ type: 'FAILED_REGISTER', error: 'Email already exists' });
        }
    } catch (error) {

    }
}



function* fetchGetCart() {
    try {
        let result = yield call(cartService.getCart);
        yield put({ type: 'GET_CART', payload: result.data });
    } catch (error) {

    }
}

function* updateQuantity(action) {
    try {
        yield call(cartService.updateQuantities, action.payload.quantity, action.payload.id);
        let result = yield call(cartService.getCart);
        yield put({ type: 'GET_CART', payload: result.data });
    } catch (error) {
    }
}

function* removeItem(action) {
    try {
        yield call(orderService.removeItem, action.payload);
        let result = yield call(cartService.getCart);
        yield put({ type: 'GET_CART', payload: result.data });
    } catch (error) {

    }
}

function* checkOutData(action) {
    try {
        yield call(orderService.order, action.payload);
        let result = yield call(cartService.getCart);
        yield put({ type: 'GET_CART', payload: result.data });
        yield put({ type: 'GET_ALL_ORDER' });
    } catch (error) {
        console.log('Failed Checkout');
    }
}

function* getAllOrder() {
    try {
        let result = yield call(orderService.getAllOrder);
        yield put({
            type: 'GET_ORDER',
            payload: result
        });
    } catch (error) {
        // console.log('Error get all order!');
    }
}

function* myOrderDetail(action) {
    try {
        let result = yield call(orderService.getOrderDetail, action.payload);
        yield put({
            type: 'GET_DETAIL',
            payload: result.data
        });
    } catch (error) {
        console.log('Error get all details!');
    }
}

function* fetchGetProducts() {
    try {
        let result = yield call(productsService.products);
        yield put({ type: 'PRODUCTS', payload: result.data });
    } catch (error) {

    }
}

function* getProductDetails(action) {
    try {
        let result = yield call(productDetailsService.productsDetail, action.payload);
        yield put({
            type: 'PRODUCT_DETAILS',
            payload: result
        });
    } catch (error) {
        console.log(error);
    }
}
function* rootSaga() {
    yield takeEvery('LOGIN', fetchLogin);
    yield takeLatest('LOGOUT', clearCart);
    yield takeEvery('UPDATE_INFO', fetchUpdateInfo);
    yield takeEvery('REGISTER', fetchRegister);
    yield takeLatest('GET_PROFILE', fetchGetProfile);
    yield takeEvery('GET_PROFILE', fetchGetCart);
    yield takeLatest('GET_PRODUCTS', fetchGetProducts);
    yield takeEvery(['INCREASE', 'DECREASE'], updateQuantity);
    yield takeEvery('REMOVE', removeItem);
    yield takeLatest('CHECK_OUT', checkOutData);
    yield takeLatest('GET_ALL_ORDER', getAllOrder);
    yield takeLatest('GET_ORDER_DETAIL', myOrderDetail);
    yield takeLatest('GET_PRODUCT_DETAILS', getProductDetails);

}

export default rootSaga;