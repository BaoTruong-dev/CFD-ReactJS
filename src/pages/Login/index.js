import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthPage from '../../components/AuthPage';
import InputField from '../../components/InputField';
import authService from '../../services/authService';
import userService from '../../services/userService';
export default function Login() {
    const dispatch = useDispatch();
    const navigateHome = useNavigate();
    const [account, setAccount] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const onChangeData = (name) => (e) => {
        let value = e.currentTarget.value;
        setAccount({
            ...account,
            [name]: value
        });
    };
    const handleAccount = async () => {
        let result = await authService.login(account);
        if (result.message) {
            return setErrorMessage('Your email or password is incorrect!');
        }
        setErrorMessage('');
        // localStorage.setItem('token', JSON.stringify(result.data));
        // let user = await userService.getInfo();
        // console.log(user);
        dispatch({
            type: 'LOGIN',
            payload: account
        });
        navigateHome('/');

    };
    return (
        <>
            <AuthPage title={'LOGIN'} path="/" handle={handleAccount} backPath='/' buttonName="Login">
                <InputField id="account" placeHolder='Your account' onChange={onChangeData('username')} />
                <InputField type='password' id="password" placeHolder='Your password' onChange={onChangeData('password')} />
                <p className='error'>{errorMessage}</p>
                <Link to="" className='forgot'>Forgot your password?</Link>
                <Link to="/authen/register" className='directRegister'>Create an account!?</Link>
            </AuthPage>
        </>
    );
};

