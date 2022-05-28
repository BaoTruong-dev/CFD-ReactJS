import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Direction from '../../components/Direction';
import LoadingRender from '../../components/LoadingRender';
import { useValidate } from '../../context/Validate';
import LoadingPage from '../LoadingPage';
import AddInfo from './Components/AddInfo';
import BillingInfo from './Components/BillingInfo';
import BillingMethod from './Components/BillingMethod';
import Confirmation from './Components/Confirmation';
import Ensure from './Components/Ensure';
import OrderSummary from './Components/OrderSummary';
import PaymentMethod from './Components/PaymentMethod';
import './style.scss';
export default function Payment() {
    const cart = useSelector(store => store?.cart?.cart);
    const { checked } = useSelector(store => store.loading);
    const { listItems } = useSelector(store => store?.cart?.cart);
    const { handleValidate, fields } = useValidate();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsChecked(false);
        }, 3000);
    }, []);
    if (isChecked) {
        return <LoadingPage />;
    }
    let productsId = listItems?.map(item => {
        return {
            id: item.product._id
        };
    });
    const handleFetchData = async () => {
        let objError = handleValidate();
        if (Object.keys(objError).length === 0) {
            if (cart?.totalQuantity === 0 || !cart?.totalQuantity) {
                alert('Your cart is empty!');
            } else {
                alert('Ordered Successfully!');
                dispatch({
                    type: 'CHECK_OUT',
                    payload: {
                        orderItems: productsId,
                        ...fields
                    }
                });
                setIsSuccess(true);

            }
        } else {
            alert('Something\'s wrong!?');
        }
    };
    if (isSuccess) navigate('/order/orders');
    return (
        <>
            {checked ? <LoadingRender /> : null}
            <div className='payment container-fluid'>
                {/* <div className='direction'>
                <Link to="/" className='directionHome'>HomePage</Link>
                <span>/</span>
                <Link to="/payment" className='directionCurrentPage'>Checkout Page</Link>
            </div> */}
                <Direction backContent='Home Page' currentLink='/payment' currentContent='Payment' />
                <div className='paymentLayout'>
                    <div className='paymentLayout__left'>
                        <BillingInfo />
                        <BillingMethod />
                        <PaymentMethod />
                        <AddInfo />
                        <Confirmation />
                        <Button color='white' size='large'
                            round='round'
                            border='darkGreen'
                            onClick={handleFetchData}
                        >Complete order</Button>
                        <Ensure />
                    </div>
                    <div className='paymentLayout__right'>
                        <OrderSummary />
                    </div>
                </div>
                <p className='payment__copy'>Copyright © 2020 Freshnesecom</p>
            </div>
        </>


    );
}


