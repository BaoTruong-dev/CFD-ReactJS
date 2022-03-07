import React from 'react';
import { BitcoinIcon, VisaAMaster } from '../../svgs';
import InputField from '../InputField';
import './style.scss';
export default function Bitcoin({ error, show, ...rest }) {
    return (
        <div className='bitcoin'>
            <div className='bitcoin__input'>
                <div>
                    <input type="radio" id="bitcoin" {...rest} />
                    <label htmlFor='bitcoin'>Bitcoin</label>
                </div>
                <div>
                    <BitcoinIcon />
                </div>
            </div>
            <div className={`bitcoin__number ${show ? 'show' : ''}`}>
                <InputField type='text' label={'Card number'} placeHolder='Card number' id='bitcoin-number' />
            </div>
            <div className={`bitcoin__holder ${show ? 'show' : ''}`}>
                <div className='left'>
                    <InputField type='text' label={'Card holder'} placeHolder='Card holder' id='bitcoin-holder' />
                </div>
                <div className='right'>
                    <InputField type='date' label={'Expiration date'} id='bitcoin-expirationDate' />
                    <InputField type='text' label={'CVC'} placeHolder='CVC' id='cvc' />
                </div>
            </div>
        </div>
    );
}
