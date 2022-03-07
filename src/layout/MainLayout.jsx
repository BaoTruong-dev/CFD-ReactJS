import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import MenuDropDown from '../components/MenuDropDown';
import Orders from '../components/Orders';
import { usePopup } from '../context/PopupOrders';
export default function MainLayout() {
    const { hidePopupHandle } = usePopup();
    return (
        <div onClick={hidePopupHandle}>
            <InfoBar />
            <Header />
            <MenuDropDown />
            <Outlet></Outlet>
            <Footer />
            <Orders />
        </div>
    );
}
