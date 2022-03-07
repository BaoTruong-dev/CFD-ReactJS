import React from 'react';
import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import MenuDropDown from '../components/MenuDropDown';
import { ValidateProvider } from '../context/Validate';
import Payment from '../pages/Payment';

export default function PaymentLayout() {
    return (
        <>
            <InfoBar />
            <Header />
            <MenuDropDown />
            <Payment />
        </>


    );
}
