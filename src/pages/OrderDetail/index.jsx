import { Menu } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import InfoBar from '../../components/InfoBar';
import MenuDropDown from '../../components/MenuDropDown';
import OrdernInfo from '../../components/OrderInfo';
import Footer from '../../components/Footer';

import './style.scss';
import Button from '../../components/Button';
import url from '../../utilities/url';
import orderService from '../../services/orderService';
import LoadingPage from '../LoadingPage';
import { Navigate } from 'react-router-dom';

export default function OrderDetail() {
    let nav = ['Home', 'All Orders'];
    let queryObj = url.queryObject();
    const [dataFromApi, setDataFromApi] = useState({});
    useEffect(() => {
        (async function () {
            let result = await orderService.getOrderDetail(queryObj.id);
            setDataFromApi(result);
        })();
    }, []);
    if (Object.keys(dataFromApi).length < 1) {
        return <LoadingPage />;
    }
    return (
        <>
            <InfoBar />
            <Header />
            <MenuDropDown nav={nav} mainLink='user' />
            <div className='orderDetail container-fluid'>
                <div className="orderDetail__left">
                    <h3>Your order's information: </h3>
                    <div className='infoGroup'>
                        <p>Your name: </p>
                        <p>{dataFromApi?.data?.firstName}</p>
                    </div>
                    <div className='infoGroup'>
                        <p>Email: </p>
                        <p>{dataFromApi?.data?.email}</p>
                    </div>
                    <div className='infoGroup'>
                        <p>Address: </p>
                        <p>{dataFromApi?.data?.address} {dataFromApi?.data?.province}</p>
                    </div>
                    <div className='infoGroup'>
                        <p>Payment: </p>
                        <p>{dataFromApi?.data?.paymentMethod}</p>
                    </div>
                    <div className='infoGroup'>
                        <p>Phone Number: </p>
                        <p>{dataFromApi?.data?.phone}</p>
                    </div>
                </div>
                <div className='orderDetail__right'>
                    {dataFromApi?.data?.listItems?.map((infoItem, index) => {
                        return <OrdernInfo key={index} img={infoItem?.product.thumbnail_url} name={infoItem?.product.name} des={infoItem?.product.short_description} quantity={infoItem?.quantity} unitPrice={infoItem?.product.price} discount={infoItem?.product.discount} total={infoItem?.product?.real_price}>
                            {dataFromApi?.data?.listItems.length === index + 1 ?
                                <div className='wrap'>
                                    <Button size='medium' color='white' round='round'
                                        path='/user/allorders'
                                    >Back to all Orders</Button>
                                </div> : ''
                            }

                        </OrdernInfo>;
                    })}
                </div>
            </div>
            <Footer />
        </>
    );

}
