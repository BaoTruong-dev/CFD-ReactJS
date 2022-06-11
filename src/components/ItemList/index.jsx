import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from '../../svgs';
import './style.scss';
export default function ItemList({ children, address, mainLink }) {
    return (
        <div className='itemList'>
            <Link to={address === 'home' ? '/CFD-ReactJs' : mainLink ? '/' + mainLink + '/' + address : address}><span>{children}</span>
                <div><ArrowDown /></div>
            </Link >
        </div>
    );
}
