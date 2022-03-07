import classnames from 'classnames';
import React from 'react';
import Button from '../Button';
import './style.scss';
export default function Catalogue({ title, list, point }) {
    return (
        <div className="catalogue">
            <div className={classnames('catalogue__wrapper', point)}>
                <h3>{title}</h3>
                <ul>
                    {list.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
                </ul>
            </div>
        </div >
    );
}
