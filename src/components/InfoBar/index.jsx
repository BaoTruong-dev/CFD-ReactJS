import React from 'react';
import Line from '../Line';
import { Link } from 'react-router-dom';
import './style.scss';
export default function InfoBar() {
    return (
        <>
            <div className='infoBar container-fluid'>
                <ul className='left'>
                    <li><Link to="/">Chat with us</Link></li>
                    <li><Link to="/">+420 336 775 664</Link></li>
                    <li><Link to="/">info@freshnesecom.com</Link></li>
                </ul>
                <ul className='right'>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Careers</Link></li>
                </ul>
            </div>
            <Line />
        </>
    );

}
