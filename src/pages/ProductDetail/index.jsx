import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Direction from '../../components/Direction';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InfoBar from '../../components/InfoBar';
import productDetailsService from '../../services/productDetailsService';
import url from '../../utilities/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import Button from '../../components/Button';
import CardContent from '../../components/CardContent';
import LoadingPage from '../LoadingPage';
import LoadingRender from '../../components/LoadingRender';
export default function ProductDetail() {
    window.scrollTo(100, 200);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store.cart);
    const { checked } = useSelector(store => store.loading);
    let products = useSelector(store => store.products);
    const { login } = useSelector(store => store.auth);
    const [isReDirectLogin, setIsReDirectLogin] = useState(false);
    let [data, setData] = useState({});
    let [isRedirect, setIsRedirect] = useState(false);
    let [num, setNum] = useState(1);
    let queryObj = url.queryObject();
    queryObj.id = Number(queryObj.id);
    useEffect(() => {
        (async function () {
            let result = await productDetailsService.productsDetail(queryObj.id);
            setData(result);
        })();
    }, [queryObj.id]);
    let index = products?.findIndex(e => {
        return e.id == queryObj.id;
    });
    let randomNumsArr = [];
    for (let i = 0; i <= 3; i++) {
        let randomNum = Math.floor(Math.random() * 14 + 1);
        for (let i = 0; i < randomNumsArr.length; i++) {
            if (randomNum == randomNumsArr[i] || randomNum == index) {
                randomNum = Math.floor(Math.random() * 14 + 1);
            }
        }
        randomNumsArr.push(randomNum);
    }
    const handleBack = () => {
        navigate(-1);
    };
    const handleAddToCart = () => {
        if (data) {
            dispatch({
                type: 'LOADING_CHECKED',
                payload: true
            });
            setTimeout(() => {
                dispatch({
                    type: 'LOADING_CHECKED',
                    payload: false
                });
            }, 2000);
            let index = cart.listItems.findIndex(e => {
                return e.product._id == data._id;
            });
            if (index >= 0) {
                let quantity = cart.listItems[index].quantity;
                dispatch({
                    type: 'INCREASE',
                    payload: {
                        quantity: quantity += num,
                        id: data._id
                    }
                });
            } else {
                dispatch({
                    type: 'INCREASE',
                    payload: {
                        quantity: num,
                        id: data._id
                    }
                });
            }
        }
    };
    const handleBuyNow = () => {
        if (login) {

            if (data) {
                let index = cart.listItems.findIndex(e => {
                    return e.product._id == data._id;
                });
                if (index >= 0) {
                    let quantity = cart.listItems[index].quantity;
                    dispatch({
                        type: 'INCREASE',
                        payload: {
                            quantity: quantity += num,
                            id: data._id
                        }
                    });
                    setIsRedirect(true);
                } else {
                    dispatch({
                        type: 'INCREASE',
                        payload: {
                            quantity: num,
                            id: data._id
                        }
                    });
                    setIsRedirect(true);
                }
            }
        } else {
            setIsReDirectLogin(true);
        }
    };
    const handleIncrease = () => {
        setNum(++num);
    };
    const handleDecrease = () => {
        if (num == 1) {
            setNum(1);
        } else {
            setNum(--num);
        }
    };
    if (isReDirectLogin) return <Navigate to="/authen/login" />;
    if (isRedirect) return <Navigate to="/payment" />;
    if (Object.keys(data).length <= 0) {
        return <LoadingPage />;
    }
    return (
        <>
            {checked ? <LoadingRender /> : null}
            <InfoBar />
            <Header />
            <div onClick={handleBack} className="productDetailButtonBack container-fluid">
                <span>Go back</span>
                <div>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </div>
            </div>
            <div className={`productDetail container-fluid`}>
                <div className='productDetail__wrapper'>
                    <div className='left'>
                        <div className='mainImg'>
                            <img src={data?.thumbnail_url}></img>
                        </div>
                    </div>
                    <div className='right'>
                        <p className='title'>{data?.name}</p>
                        <div className='price'>
                            <p className='price__original'>{data?.price}</p>
                            <p className='price__promo'>{data?.real_price?.toLocaleString()}Đ</p>
                            <p className='price__percentage'>{Math.floor(100 - (data?.real_price * 100 / data?.price))}% PROMO</p>
                        </div>
                        <div className='quantities'>
                            <p>Quantities:</p>
                            <div className='quantities__wrapper'>
                                <p className='decrease' onClick={handleDecrease}>-</p>
                                <p className='num'>{num}</p>
                                <p className='increase' onClick={handleIncrease}>+</p>
                            </div>
                        </div>
                        <div className='buttonWrapper'>
                            <Button id={queryObj.id} size='large' color='white' round='round' onClick={handleAddToCart}>Add to cart</Button>
                            <Button id={queryObj.id} size='large' background='grey' color='green' round='round' onClick={handleBuyNow} style={{ width: '100px' }}>Buy now</Button>
                        </div>
                    </div>
                </div>
                <div className='productDetail__intro'>
                    <h4>thông tin sản phẩm</h4>
                    <div className='productDetail__intro--group'>
                        {Object.keys(data).length > 0 && data?.top_features?.length > 1 ? data?.top_features?.map((e, index) => {
                            if (index == 0) {
                                return <p>
                                    Tình trang: {e}
                                </p>;
                            }
                            return <p>{e}</p>;
                        }) : <p>{data?.short_description}</p>}
                    </div>
                </div>
                <div className='productDetail__relative'>
                    <h4>Các sản phẩm liên quan</h4>
                    <div className='productDetail__relative--wrapper'>
                        {randomNumsArr.map(e => {
                            return <CardContent title={products[e]?.name} id={products[e]?.id} content={products[e]?.short_description} price={products[e]?.real_price.toLocaleString() + 'VND'} src={products[e]?.thumbnail_url} />;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
