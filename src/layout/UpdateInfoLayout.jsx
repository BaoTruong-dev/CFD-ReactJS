import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import MenuDropDown from '../components/MenuDropDown';
import Footer from '../components/Footer';
export default function UpdateInfoLayout() {
    return (
        <>
            <InfoBar />
            <Header />
            <MenuDropDown />
            <Outlet />
            <Footer />
        </>
    );
}
