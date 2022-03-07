import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import InfoBar from '../../components/InfoBar';
import MenuDropDown from '../../components/MenuDropDown';
import BestFarmer from './components/BestFarmer';
import BestSeller from './components/BestSeller/BestSeller';
import BlogHome from './components/BlogHome/BlogInfo';
import CustomersQuote from './components/CustomersQuote';
import Headline from './components/Headline';
import HomeCategory from './components/HomeCategory/Category';
import './style.scss';
export default function Home() {
    let dispatch = useDispatch();
    let products = useSelector(store => store.products);
    useEffect(() => {
        dispatch({
            type: 'GET_PRODUCTS'
        });
    }, []);
    return (
        <div className="homePage">
            <HomeCategory />
            <BestSeller products={products} />
            <BestFarmer products={products} />
            <CustomersQuote />
            <Headline />
            <BlogHome />
        </div>
    );
}
