import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/AuthPage';
import InputField from '../../components/InputField';
import { regexEmail, regexName } from '../../constant/regex';
export default function Register() {
    let navigateLogin = useNavigate();
    let store = useSelector(store => store.auth);

    let dispatch = useDispatch();
    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        name: '',
    });
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const onChangeData = (name) => (e) => {
        let value = e.currentTarget.value;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };
    const handleRegister = async () => {
        let getKeys = Object.keys(registerData);
        let objError = {};
        for (let i = 0; i < getKeys.length; i++) {
            if (!registerData[getKeys[i]].trim()) {
                objError[getKeys[i]] = 'Please fill this field';
            }
        }
        if (!objError.username) {
            if (!regexEmail.test(registerData.username)) {
                objError.username = 'Your email is not in the correct format';
            }
        }
        if (!objError.password) {
            if (!(registerData.password.length >= 6 && registerData.password.length <= 18)) {
                objError.password = 'Character length from 6 and no more than 18';
            }
        }
        if (!objError.name) {
            if (!regexName.test(registerData.name)) {
                objError.name = 'Invalid name';
            }
        }
        if (Object.values(objError).length === 0) {
            // let result = await authService.register(registerData);
            // if (result.error) {
            //     return alert('Email already exists');
            // }
            // alert('Register Successfully!');
            // navigateLogin('/authen/login');
            dispatch({
                type: 'REGISTER',
                payload: registerData
            });
            if (store.message) {
                return alert(store.message);
            }
            alert('Register Successfully!');
            setIsSuccessful(true);
        } else {
            setErrorMessage(objError);
        }

    };
    if (isSuccessful) navigateLogin('/authen/login');
    return (
        <>
            <AuthPage title={'Register'} handle={handleRegister} backPath='/authen/login' buttonName='Register'>
                <div className='group'>
                    <InputField type='text' placeHolder={'Your email'} onChange={onChangeData('username')} />
                    <p className='error'>{errorMessage.username}</p>
                </div>
                <div className='group'>
                    <InputField type="password" placeHolder={'Your password'} onChange={onChangeData('password')} />
                    <p className='error'>{errorMessage.password}</p>
                </div>
                <div className='group'>
                    <InputField type="text" placeHolder={'Your name'} onChange={onChangeData('name')} />
                    <p className='error'>{errorMessage.name}</p>
                </div>
            </AuthPage>
        </>
    );
};
