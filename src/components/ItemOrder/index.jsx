import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowDown, CloseIcon, CompareIcon, HeartIcon, StarIcon } from '../../svgs';
import Line from '../Line';
import './style.scss';
export default function ItemOrder({ src, title, des, price, discount, rate, qualities, id }) {
    let dispatch = useDispatch();
    return (
        <>
            <div className="itemOrder">
                <div className='itemOrder__left'>
                    <div className='itemOrder__left--img'>
                        <img src={src}></img>
                    </div>
                    <div className='itemOrder__left--wishList'>
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
                    </div>
                    <div className='itemOrder__left--remove'>
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
                        <div className='pcsGroup__right'>
                            <p onClick={() => {
                                dispatch({
                                    type: 'DECREASE',
                                    payload: {
                                        quantity: qualities - 1,
                                        id: id
                                    }
                                });
                            }}>-</p>
                            <span>{qualities}</span>
                            <p
                                onClick={() => {
                                    dispatch({
                                        type: 'INCREASE',
                                        payload: {
                                            quantity: qualities + 1,
                                            id: id
                                        }
                                    });
                                }}
                            >+</p>
                        </div>
                    </div>
                </div>
            </div>
            <Line />
        </>

    );
}
