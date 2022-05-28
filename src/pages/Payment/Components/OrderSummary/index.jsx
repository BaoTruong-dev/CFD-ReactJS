import React from 'react';
import { useSelector } from 'react-redux';
import ItemOrder from '../../../../components/ItemOrder';
import loadingReducer from '../../../../store/loadingReducer';
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
                        if (item.quantity > 0) {
                            return <ItemOrder key={item.product._id} src={item.product.thumbnail_url} price={item.product.real_price} discount={item.product.price} title={item.product.name} des={item.product.short_description}
                                rate={Math.round(item.product.rating_average)} qualities={item.quantity} id={item.product.id} _id={item.product._id}
                            />;
                        }
                    })}
            <div className='orderSummary__payment'>
                <p>Subtotal</p>
                <p>{listItems?.reduce((initValue, currentValue) => {
                    return initValue + currentValue.product.real_price * currentValue.quantity;
                }, 0)}</p>
            </div>
            <div className='orderSummary__payment'>
                <p>Tax</p>
                <p>{cart?.totalQuantity > 0 ?
                    listItems?.reduce((initValue, currentValue) => {
                        return initValue + currentValue.product.real_price * currentValue.quantity;
                    }, 0) * 0.1
                    : '0'}</p>
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
                    <p>{cart?.totalQuantity > 0 ?
                        listItems?.reduce((initValue, currentValue) => {
                            return initValue + currentValue.product.real_price * currentValue.quantity;
                        }, 0) * 0.1
                        +
                        listItems?.reduce((initValue, currentValue) => {
                            return initValue + currentValue.product.real_price * currentValue.quantity;
                        }, 0)
                        :
                        '0'}</p>
                </div>
            </div>
        </div>
    );
}
