import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export default function Direction({ backLink, backContent, currentLink, currentContent }) {
    return (
        <div className='direction'>
            <Link to={backLink ? backLink : '/CFD-ReactJs'} className='directionHome'>{backContent}</Link>
            <span>/</span>
            <Link to={currentLink ? currentLink : ''} className='directionCurrentPage'>{currentContent}</Link>
        </div>
    );
}

