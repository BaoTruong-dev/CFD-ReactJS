import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { ProfileIcon } from '../../svgs';
export default function Profile() {
    return (
        <div className='profile'>
            <Link to="/authen/login"><ProfileIcon /></Link>
        </div>
    );
}
