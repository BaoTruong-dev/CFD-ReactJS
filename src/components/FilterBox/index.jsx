import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import convertLetterJs from '../../utilities/convertLetterJs';
import { useNavigate } from 'react-router-dom';
import productsService from '../../services/productsService';
export default function FilterBox({ filter }) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const handleRedirectProducts = async () => {
        let { data } = await productsService.products();
        let filterProducts = data?.filter(product => {
            return convertLetterJs(product.name).includes(convertLetterJs(filter));
        });
        if (filterProducts.length == 0) {
            return navigate('/notfound');
        }
        dispatch({
            type: 'FILTER_PRODUCTS',
            payload: filterProducts
        });
        navigate('/CFD-ReactJs/allproducts');
    };
    return (
        <>
            <div className='filterBox'>
                <div className="filterBox__wrapper" onClick={handleRedirectProducts}>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faShop} />
                        </div>
                        <p>Finding products: "{filter}"</p>
                    </div>
                </div>
            </div>
        </>
    );
}
