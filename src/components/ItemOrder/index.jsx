import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDown, CloseIcon, CompareIcon, HeartIcon, StarIcon } from '../../svgs';
import Line from '../Line';
import orderService from '../../services/orderService';
import './style.scss';
import { Link } from 'react-router-dom';
import LoadingRender from '../LoadingRender';
export default function ItemOrder({ src, title, des, price, discount, rate, qualities, id, _id }) {
    let dispatch = useDispatch();
    const handleRemove = (e) => {
        e.preventDefault();
        dispatch({
            type: 'REMOVE',
            payload: _id
        });
    };
    const handleQuantities = (type) => {
        dispatch({
            type: 'LOADING_CHECKED',
            payload: true
        });
        setTimeout(() => {
            dispatch({
                type: 'LOADING_CHECKED',
                payload: false
            });
        }, 2000);
        switch (type) {
            case 'DECREASE':
                return dispatch({
                    type: 'DECREASE',
                    payload: {
                        quantity: qualities - 1,
                        id: _id
                    }
                });
            case 'INCREASE':
                return dispatch({
                    type: 'INCREASE',
                    payload: {
                        quantity: qualities + 1,
                        id: _id
                    }
                });
        }
        return null;
    };
    return (
        <>
            <Link className="itemOrder" to={`/productdetail?id=${id}`} >
                <div className='itemOrder__left'>
                    <div className='itemOrder__left--img'>
                        <img src={src}></img>
                    </div>
                    {/* <div className='itemOrder__left--wishList'>
                        <div className='svg'>
                            <HeartIcon />
                        </div>
                        <p>Wishlist</p>
                    </div>
                    <div className='itemOrder__left--compare'>
                        <div className='svg'>
                            <CompareIcon />
                        </div>
                        <p>Compare</p>
                    </div> */}
                    <div className='itemOrder__left--remove' onClick={handleRemove}>
                        <div className='svg'>
                            <CloseIcon />
                        </div>
                        <p>Remove</p>
                    </div>

                </div>
                <div className='itemOrder__right'>
                    <h4>{title}</h4>
                    <div className='des'>
                        <p>{des}</p>
                    </div>
                    <div className='rate'>
                        {[...Array(rate)].map(item => {
                            return <StarIcon />;
                        })}
                    </div>
                    <div className='pcsGroup'>
                        <div className='pcsGroup__left'>
                            <p>{price} VND</p>
                            <p>{discount} VND</p>
                        </div>
                        <div className='pcsGroup__right' onClick={(e) => e.preventDefault()}>
                            <p onClick={() => handleQuantities('DECREASE')}>-</p>
                            <span>{qualities}</span>
                            <p onClick={() => handleQuantities('INCREASE')}>+</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Line />
        </>

    );
}
