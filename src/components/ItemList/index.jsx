import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from '../../svgs';
import './style.scss';
export default function ItemList({ children, address }) {
    return (
        <div className='itemList'>
            <Link to={address}><span>{children}</span>
                <div><ArrowDown /></div>
            </Link >

        </div>
    );
}
