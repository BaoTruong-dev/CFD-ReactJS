import React from 'react';
import { useSelector } from 'react-redux';
import ItemOrder from '../../../../components/ItemOrder';
import './style.scss';
export default function OrderSummary() {
    const store = useSelector(store => store.cart);
    const cart = store?.cart;
    const { listItems } = cart;
    return (
        <div className='orderSummary container-fluid'>
            <div className='titleGroup'>
                <h2>Payment method</h2>
                <div className='noteCurrentStep'>
                    <p>Please enter your payment method</p>
                </div>
            </div>
            {
                cart?.totalQuantity === 0 ? ''
                    : listItems?.map(item => {
                        return <ItemOrder key={item.product._id} src={item.product.thumbnail_url} price={item.product.real_price} discount={item.product.price} title={item.product.name} des={item.product.short_description}
                            rate={item.product.discount_rate} qualities={item.quantity} id={item.product._id}
                        />;
                    })}
            <div className='orderSummary__payment'>
                <p>Subtotal</p>
                <p>{cart?.subTotal}</p>
            </div>
            <div className='orderSummary__payment'>
                <p>Tax</p>
                <p>{cart?.tax}</p>
            </div>
            <div className='orderSummary__payment'>
                <p>Shipping</p>
                <p>0 USD</p>
            </div>
            <div className='orderSummary__code'>
                <input type='text' placeholder='Apply promo code' />
                <p>Apply Now</p>
            </div>
            <div className='orderSummary__total'>
                <div className='orderSummary__total--left'>
                    <p>Total Order</p>
                    <p>Guaranteed delivery day:  June 12, 2020</p>
                </div>
                <div className='orderSummary__total--right'>
                    <p>{(cart?.subTotal + cart?.tax)}</p>
                </div>
            </div>
        </div>
    );
}
