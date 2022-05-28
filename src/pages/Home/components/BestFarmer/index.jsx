import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
import Catalogue from '../../../../components/Catalogue';
import LoadingProduct from '../../../../components/LoadingProduct';
import { dataTags } from '../../../../constant';
import './style.scss';
export default function BestFarmer(props) {
    let productsArray = props.products;
    const { cart } = useSelector(store => store.cart);
    const { login } = useSelector(store => store.auth);
    const [isDirect, setIsDirect] = useState(false);
    const [isReDirectLogin, setIsReDirectLogin] = useState(false);
    const dispatch = useDispatch();
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
            <div className='bestFarmer homePage__content container-fluid'>
                <div className='left'>
                    <Catalogue title={dataTags.title.bestFarmers} list={dataTags.listLink.bestFarmers} point={'underLine'}></Catalogue>
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
        <div className='bestFarmer homePage__content container-fluid'>
            <div className='left'>
                <Catalogue title={dataTags.title.bestFarmers} list={dataTags.listLink.bestFarmers} point={'underLine'}></Catalogue>
                <Button path="/allproducts" positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                    round={'round'}
                >More products</Button>
            </div>
            <div className='right'>
                <CardContent rate={Math.round(productsArray[6]?.rating_average)} handleOrder={handleOrder} _id={productsArray[6]?._id} title={productsArray[6]?.name} id={productsArray[6]?.id} content={productsArray[6]?.short_description} price={productsArray[6]?.real_price.toLocaleString() + 'VND'} src={productsArray[6]?.thumbnail_url} />
                <CardContent rate={Math.round(productsArray[7]?.rating_average)} handleOrder={handleOrder} _id={productsArray[7]?._id} title={productsArray[7]?.name} id={productsArray[7]?.id} content={productsArray[7]?.short_description} price={productsArray[7]?.real_price.toLocaleString() + 'VND'} discount={productsArray[7]?.price.toLocaleString() + 'VND'} src={productsArray[7]?.thumbnail_url} />
                <CardContent rate={Math.round(productsArray[8]?.rating_average)} handleOrder={handleOrder} _id={productsArray[8]?._id} title={productsArray[8]?.name} id={productsArray[8]?.id} content={productsArray[8]?.short_description} price={productsArray[8]?.real_price.toLocaleString() + 'VND'} discount={productsArray[8]?.price.toLocaleString() + 'VND'}
                    src={productsArray[8]?.thumbnail_url}
                />
            </div>
        </div>
    );
}
