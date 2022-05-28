import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
export default function OrdernInfo({ img, name, des, quantity, unitPrice, discount, total, children }) {
    const { pathname } = useLocation();
    return (
        <>
            <div className='orderInfo'>
                <div className='orderInfo__wrapper'>
                    <div className='orderInfo__wrapper--details'>
                        <div className='img'>
                            <img src={img}></img>
                        </div>
                        <div className='des'>
                            <p>{name}</p>
                            <p>{des}</p>
                            <p>x{quantity}</p>
                        </div>
                        {pathname === '/order/orderdetail' ?
                            <div className='price'>
                                <p className='unitPrice'>{unitPrice * quantity}</p>
                                <p className='tax'>Discount: {discount * quantity}</p>
                            </div>
                            : ''}
                    </div>
                    {pathname === '/order/orderdetail' ?
                        <div className='orderInfo__wrapper--total'>
                            <div className='totalPrice'>
                                <p>
                                    Total: {total * quantity}
                                </p>
                                <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                            </div>
                        </div>

                        : ''}
                    {children}
                </div>
            </div>
        </>
    );
}
