import React from 'react';
import empty_cart from '../../assets/imgs/empty_cart.png';
import Button from '../Button';
import './style.scss';
export default function EmptyOrders() {
  return (
    <div className='emptyOrders'>
      <div className="emptyOrders__img">
        <img src={empty_cart} alt="empty_cart" />
      </div>
      <p className='emptyOrders__content'>Your cart is empty...</p>
      <div className="emptyOrders__button">
        <Button color='white' size='medium' round='round' path='/allproducts'>BUY NOW</Button>
      </div>
    </div>
  );
}
