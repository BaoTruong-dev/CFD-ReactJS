import React from 'react';
import { MainLogo } from '../../svgs';
import MiniCart from '../MiniCart';
import Profile from '../Profile';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';
import Skeleton from '../Skeleton';
export default function Header() {
    const state = useSelector(store => store.auth);
    return (
        <div className="header container-fluid">
            <div className="left">
                <Link to="/CFD-ReactJs"><MainLogo /></Link>
            </div>
            <SearchBar />
            <div className='right'>
                {state.login ? <Avatar avatar={state.user?.avatar} name={state.user && state.user?.name} /> : <Profile />}
                <MiniCart />
            </div>
        </div>
    );
}
