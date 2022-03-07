import React from 'react';
import Button from '../../components/Button';
import { HeartIcon, SuccessfulIcon } from '../../svgs';
import './style.scss';
export default function OrderSuccessfully() {
    return (
        <div className='orderSuccessfully'>
            <div className='orderSuccessfully__wrapper'>
                <p className='announce'>Your order is complete!</p>
                <div className='img'>
                    <HeartIcon />
                </div>
                <p className='thanks'>Thank you so much for your order!</p>
                <div className='buttonGroup'>
                    <Button color="white" border='green' background='green' size='medium' round="round" path="/">Go back to home</Button>
                    <Button color="white" border='green' background='green' size='medium' round="round" path="/order/allorders">Check your all orders</Button>
                </div>
            </div>
        </div>
    );
}
