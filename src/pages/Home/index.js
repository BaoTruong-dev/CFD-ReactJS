import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from 'react-router-dom';
import Header from '../../components/Header';
import InfoBar from '../../components/InfoBar';
import MenuDropDown from '../../components/MenuDropDown';
import routers from '../../constant/router';
import routerConfig from '../../utilities/routerConfig';
import BestFarmer from './components/BestFarmer';
import BestSeller from './components/BestSeller/BestSeller';
import BlogHome from './components/BlogHome/BlogInfo';
import CustomersQuote from './components/CustomersQuote';
import Headline from './components/Headline';
import HomeCategory from './components/HomeCategory/Category';
import LoadingRender from '../../components/LoadingRender';
import './style.scss';
export default function Home() {
    let dispatch = useDispatch();
    let products = useSelector(store => store?.products);
    const { checked } = useSelector(store => store.loading);
    useEffect(() => {
        dispatch({
            type: 'GET_PRODUCTS'
        });
    }, []);
    return (
        <div className="homePage">
            {checked ? <LoadingRender /> : null}
            <HomeCategory />
            <BestSeller productsArray={products} />
            <BestFarmer products={products} />
            <CustomersQuote />
            <Headline />
            <BlogHome />
        </div>
    );
}
