import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/AuthPage';
import InputField from '../../components/InputField';
import { regexEmail } from '../../constant/regex';
import authService from '../../services/authService';
import './style.scss';
export default function ForgotPassword() {
    let input = useRef('');
    let navigate = useNavigate();
    let [error, setError] = useState(null);
    const handleGetCode = (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (regexEmail.test(value)) {
            alert('Please check your email for your new password!');
            return navigate('/authen/login');
        } else {
            setError('Your email\'s wrong!');
        }
    };
    return (
        <div className="forgotPassword">
            <AuthPage title='Forgot Password' buttonName='Submit' handle={handleGetCode} backPath='/authen/login'>
                <InputField id="forgot" placeHolder='Please type your email to get the new password' ref={input} />
                <p className='error'>{error}</p>
            </AuthPage>
        </div>
    );
}
