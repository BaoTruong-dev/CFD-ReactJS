import React, { useState } from 'react';
import Bitcoin from '../../../../components/Bitcoin';
import CreditCard from '../../../../components/CreditCard';
import Paypal from '../../../../components/Paypal';
import { useValidate } from '../../../../context/Validate';
import './style.scss';
export default function PaymentMethod() {
    const { fields, errorFields, setFields } = useValidate();
    const [checked, setChecked] = useState('');
    const onClickPayment = (e) => {
        let value = e.target.id;
        setChecked(value);
        setFields({
            ...fields,
            paymentMethod: value
        });

    };
    return (
        <div className='paymentMethod distanceTop'>
            <div className='titleGroup'>
                <h2>Payment method</h2>
                <div className='noteCurrentStep'>
                    <p>Please enter your payment method</p>
                    <p>Step 3 of 5</p>
                </div>
            </div>
            <div className='paymentMethod__credit'>
                <CreditCard show={checked === 'credit'} onClick={onClickPayment} checked={checked === 'credit'} />
                <Bitcoin show={checked === 'bitcoin'} onClick={onClickPayment} checked={checked === 'bitcoin'} />
                <Paypal show={checked === 'paypal'} onClick={onClickPayment} checked={checked === 'paypal'} />
            </div>
            <p className='error'>{errorFields.paymentMethod}</p>
        </div>
    );
}
