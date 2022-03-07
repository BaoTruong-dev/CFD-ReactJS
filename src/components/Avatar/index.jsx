import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default function Avatar({ name, avatar }) {

    return (
        <Link to="/user/update" className='avatar'>
            <div className='avatar__img'>
                <img src={avatar} />
            </div>
            <p className='avatar__name'>{name}</p>
        </Link>
    );
}
