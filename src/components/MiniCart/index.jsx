import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePopup } from '../../context/PopupOrders';
import { CartLogo } from '../../svgs';
import './style.scss';
export default function MiniCart() {
    const { showPopupHandle } = usePopup();
    const navigate = useNavigate();
    const store = useSelector(store => store);
    const { cart } = store?.cart;
    const handlePopup = (e) => {
        e.stopPropagation();
        if (store.auth.login) {
            console.log('click');
            showPopupHandle();
        } else {
            navigate('/authen/login');
        }
    };
    return (
        <div onClick={handlePopup} style={{ cursor: 'pointer' }} className='miniCart'>
            {cart?.totalQuantity === 0 || !cart?.totalQuantity ? '' :
                <div className='miniCart__quantities'>
                    <p>{cart?.totalQuantity}</p>
                </div>}
            <CartLogo />
        </div>
    );
}
