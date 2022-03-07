import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import authService from '../services/authService';
import cartService from '../services/cartService';
import orderService from '../services/orderService';
import productsService from '../services/productsService';
import userService from '../services/userService';
function* fetchLogin(action) {
    try {
        let result = yield call(authService.login, action.payload);
        localStorage.setItem('token', JSON.stringify(result.data));
        yield put({ type: 'GET_PROFILE' });
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

function* fetchGetProducts() {
    try {
        let result = yield call(productsService.products);
        yield put({ type: 'PRODUCTS', payload: result.data });
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

function* checkOutData(action) {
    try {
        console.log('success');
        let result = yield call(orderService.order, action.payload);
        console.log('result', result);
    } catch (error) {
        console.log('Failed Checkout');
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
    yield takeLatest('CHECK_OUT', checkOutData);
}

export default rootSaga;