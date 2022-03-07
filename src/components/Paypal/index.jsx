import React from 'react';
import { PaypalIcon, VisaAMasterIcon } from '../../svgs';
import InputField from '../InputField';
import './style.scss';
export default function Paypal({ error, show, ...rest }) {
    return (
        <div className='paypal'>
            <div className='paypal__input'>
                <div>
                    <input type="radio" id="paypal" {...rest} />
                    <label htmlFor='paypal'>Paypal</label>
                </div>
                <div>
                    <PaypalIcon />
                </div>
            </div>
            <div className={`paypal__number ${show ? 'show' : ''}`}>
                <InputField type='text' label={'Card number'} placeHolder='Card number' id='paypal-number' />
            </div>
            <div className={`paypal__holder ${show ? 'show' : ''}`}>
                <div className='left'>
                    <InputField type='text' label={'Card holder'} placeHolder='Card holder' id='paypal-holder' />
                </div>
                <div className='right'>
                    <InputField type='date' label={'Expiration date'} id='paypal-expirationDate' />
                    <InputField type='text' label={'CVC'} placeHolder='CVC' id='cvc' />
                </div>
            </div>
        </div>
    );
}
