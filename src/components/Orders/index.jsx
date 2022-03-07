import React from 'react';
import { useSelector } from 'react-redux';
import { usePopup } from '../../context/PopupOrders';
import { CloseIcon } from '../../svgs';
import Button from '../Button';
import ItemOrder from '../ItemOrder';
import Modal from '../Modal';
import './style.scss';
export default function Orders() {
    const { isShowPopup, hidePopupHandle } = usePopup();
    const store = useSelector(store => store.cart);
    let cart = store.cart;
    let listItems = cart?.listItems;
    if (cart?.subTotal === 0) return (
        <Modal>
            <div className={`orders --empty ${isShowPopup ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className='orders__top'>
                    <div className='orders__top--title'>
                        <h4>Shopping cart</h4>
                        <div className='close' onClick={hidePopupHandle}>
                            <p>Close</p>
                            <CloseIcon />
                        </div>
                    </div>
                </div>
                <div className='orders__empty'>
                    <p>...Empty</p>
                </div>
            </div>
        </Modal>
    );
    return (
        <Modal>
            <div className={`orders ${isShowPopup ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="orders__top">
                    <div className='orders__top--title'>
                        <h4>Shopping cart</h4>
                        <div className='close' onClick={hidePopupHandle}>
                            <p>Close</p>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className='orders__item'>
                        {cart?.totalQuantity === 0 || listItems?.map(item => {
                            return <ItemOrder key={item.product._id} src={item.product.thumbnail_url} price={item.product.real_price} discount={item.product.price} title={item.product.name} des={item.product.short_description}
                                rate={item.product.discount_rate} qualities={item.quantity} id={item.product._id}
                            />;
                        })}
                    </div>
                </div>
                <div className='orders__bottom'>
                    <div className='orders__bottom--total'>
                        <p>Subtotal</p>
                        <p>{cart?.subTotal}
                            <span>VND</span>
                        </p>
                    </div>
                    <div className='orders__bottom--direction'>
                        <p>Continue shopping</p>
                        <Button size='medium'
                            round='round'
                            border='darkGreen'
                            color='white'
                            path='payment'
                        >
                            Go to Checkout
                        </Button>
                    </div>
                </div>
            </div >
        </Modal>
    );
}
