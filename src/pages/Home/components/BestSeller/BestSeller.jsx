import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
import Catalogue from '../../../../components/Catalogue';
import LoadingProduct from '../../../../components/LoadingProduct';
import { dataTags } from '../../../../constant';
import LoadingPage from '../../../LoadingPage';
import './style.scss';
export default function BestSeller({ productsArray }) {
    const { cart } = useSelector(store => store.cart);
    const { login } = useSelector(store => store.auth);
    let dispatch = useDispatch();
    const [isDirect, setIsDirect] = useState(false);
    const [isReDirectLogin, setIsReDirectLogin] = useState(false);
    const handleOrder = (id) => {
        if (login) {
            if (cart) {
                let findIndex = cart.listItems.findIndex(data => {
                    return data.product._id == id;
                });
                if (findIndex >= 0) {
                    let quantity = cart.listItems[findIndex]?.quantity;
                    dispatch({
                        type: 'INCREASE',
                        payload: {
                            quantity: ++quantity,
                            id
                        }
                    });
                } else {
                    dispatch({
                        type: 'INCREASE',
                        payload: {
                            quantity: 1,
                            id
                        }
                    });
                }
                setIsDirect(true);
            }
        } else {
            setIsReDirectLogin(true);
        }

    };
    if (isReDirectLogin) return <Navigate to="/authen/login" />;
    if (isDirect) return <Navigate to="/payment" />;
    if (productsArray.length == 0)
        return (
            <div className='bestSeller homePage__content container-fluid'>
                <div className='left'>
                    <Catalogue title={dataTags.title.bestSeller} list={dataTags.listLink.bestSeller} point={'underLine'}></Catalogue>
                    <Button path="/allproducts" positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                        round={'round'}
                    >More products</Button>
                </div>
                <div className='right'>
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />

                </div>
            </div>
        );

    return (
        <div className='bestSeller homePage__content container-fluid'>
            <div className='left'>
                <Catalogue title={dataTags.title.bestSeller} list={dataTags.listLink.bestSeller} point={'underLine'}></Catalogue>
                <Button path="/CFD-ReactJs/allproducts" positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                    round={'round'}
                >More products</Button>
            </div>
            <div className='right'>
                <CardContent rate={Math.round(productsArray[0]?.rating_average)} id={productsArray[0]?.id} _id={productsArray[0]?._id} title={productsArray[0]?.name} content={productsArray[0]?.short_description} price={productsArray[0]?.real_price.toLocaleString() + 'VND'} src={productsArray[0]?.thumbnail_url} handleOrder={handleOrder} />
                <CardContent rate={Math.round(productsArray[1]?.rating_average)} title={productsArray[1]?.name} _id={productsArray[1]?._id} id={productsArray[1]?.id} content={productsArray[1]?.short_description} price={productsArray[1]?.real_price.toLocaleString() + 'VND'} discount={productsArray[1]?.price.toLocaleString() + 'VND'} src={productsArray[1]?.thumbnail_url} handleOrder={handleOrder} />
                <CardContent rate={Math.round(productsArray[2]?.rating_average)} title={productsArray[2]?.name} id={productsArray[2]?.id} _id={productsArray[2]?._id} content={productsArray[2]?.short_description} price={productsArray[2]?.real_price.toLocaleString() + 'VND'} discount={productsArray[2]?.price.toLocaleString() + 'VND'}
                    src={productsArray[2]?.thumbnail_url}
                    handleOrder={handleOrder}
                />
            </div>
        </div>
    );
}
