import React from 'react';
import { VisaAMasterIcon } from '../../svgs';
import InputField from '../InputField';
import './style.scss';
export default function CreditCard({ error, show, ...rest }) {
    return (
        <div className='creditCard'>
            <div className='creditCard__input'>
                <div>
                    <input type="radio" id="credit" {...rest} />
                    <label htmlFor='credit'>Credit card</label>
                </div>
                <div>
                    <VisaAMasterIcon />
                </div>
            </div>
            <div className={`creditCard__number ${show ? 'show' : ''}`}>
                <InputField type='text' label={'Card number'} placeHolder='Card number' id='creditCard-number' />
            </div>
            <div className={`creditCard__holder ${show ? 'show' : ''}`}>
                <div className='left'>
                    <InputField type='text' label={'Card holder'} placeHolder='Card holder' id='creditCard-holder' />
                </div>
                <div className='right'>
                    <InputField type='date' label={'Expiration date'} id='creditCard-expirationDate' />
                    <InputField type='text' label={'CVC'} placeHolder='CVC' id='cvc' />
                </div>
            </div>
        </div>
    );
}
