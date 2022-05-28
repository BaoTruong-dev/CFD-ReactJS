import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import productsService from '../../services/productsService';
import { ArrowDown, SearchIcon } from '../../svgs';
import convertLetterJs from '../../utilities/convertLetterJs';

import FilterBox from '../FilterBox';
import './style.scss';

export default function SearchBar() {
    let [filterContent, setFilterContent] = useState('');
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let input = useRef('');
    const handleRedirectProducts = async () => {
        let { data } = await productsService.products();
        let filterProducts = data?.filter(product => {
            return convertLetterJs(product.name).includes(convertLetterJs(input.current.value));
        });
        if (filterProducts.length == 0) {
            return navigate('/notfound');
        }
        dispatch({
            type: 'FILTER_PRODUCTS',
            payload: filterProducts
        });
        navigate('/allproducts');
    };
    const handleFilter = (e) => {
        let value = e.target.value;
        setFilterContent(value);
    };
    return (
        <div className="searchBar">
            <div className='left'>
                <div className="filter">
                    <p>All categories</p>
                </div>
                <ArrowDown />
            </div>
            <div className='middle'>
                <input placeholder='Search Products, categories ...' onChange={handleFilter} ref={input} />
            </div>
            <div className='right' onClick={handleRedirectProducts}><SearchIcon /></div>
            {filterContent ? <FilterBox filter={filterContent} /> : ''}
        </div>
    );
}
