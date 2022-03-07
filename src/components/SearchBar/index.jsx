import React from 'react';
import { ArrowDown, SearchIcon } from '../../svgs';
import './style.scss';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <div className='left'>
                <div className="filter">
                    <p>All categories</p>
                </div>
                <ArrowDown />
            </div>
            <div className='middle'>
                <input placeholder='Search Products, categories ...' />
            </div>
            <div className='right'><SearchIcon /></div>
        </div>
    );
}
