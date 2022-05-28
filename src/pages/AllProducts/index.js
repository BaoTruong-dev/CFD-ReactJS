import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CardContent from '../../components/CardContent';
import Direction from '../../components/Direction';
import LoadingProduct from '../../components/LoadingProduct';
import Paginate from '../../components/Paginate';
import productsService from '../../services/productsService';
import { GridIcon, StarIcon } from '../../svgs';
import './style.scss';
export default function AllProducts() {
    let products = useSelector(store => store?.products);
    let navigate = useNavigate();
    const { search } = useLocation();
    const { cart } = useSelector(store => store.cart);
    const [filter, setFilter] = useState({
        brands: [],
        rate: [],
        min: '',
        max: ''
    });
    let dispatch = useDispatch();
    const handleOrder = (id) => {
        if (cart) {
            let findIndex = cart.listItems.findIndex(data => {
                return data.product._id == id;
            });
            if (findIndex >= 0) {
                let quantity = cart.listItems[findIndex]?.quantity;
                dispatch({
                    type: 'INCREASE',
                    payload: {
                        quantity: ++quantity,
                        id
                    }
                });
            } else {
                dispatch({
                    type: 'INCREASE',
                    payload: {
                        quantity: 1,
                        id
                    }
                });
            }
        }
    };
    const handleFilterCheck = (name) => (e) => {
        let checked = e.target.checked;
        let value = e.target.value;
        if (checked) {
            let existed = filter[name].some(e => e === value);
            if (!existed) {
                setFilter({
                    ...filter,
                    [name]: [...filter[name], value]
                });
            }
        } else {
            let newArr = filter[name].filter(e => e !== value);
            setFilter({
                ...filter,
                [name]: newArr
            });
        }
    };
    const handleFilterType = (name) => (e) => {
        let value = e.target.value;
        setFilter({
            ...filter,
            [name]: value
        });
    };
    const handleApplyFilter = async (e) => {
        e.preventDefault();
        let brandsFilter = [];
        let rateFilter = [];
        let priceFilter = [];
        let data = await productsService.products();
        for (let i = 0; i < filter.brands.length; i++) {
            let checkedArr = data.data.filter(product => {
                return product.name.toLowerCase().includes(filter.brands[i]);
            });
            brandsFilter.push(...checkedArr);
        }
        for (let i = 0; i < filter.rate.length; i++) {
            let checkedArr = data.data.filter(product => {
                return Math.round(product.rating_average) === (Number(filter.rate[i]));
            });
            rateFilter.push(...checkedArr);
        }
        if (filter.max && filter.min) {
            if (Number(filter.max) > Number(filter.min)) {
                let checkedArr = data.data.filter(product => {
                    return Number(filter.min) <= product.real_price && product.real_price <= Number(filter.max);
                });
                if (checkedArr.length > 0) {
                    priceFilter.push(...checkedArr);
                }
            } else {
                alert('Please type the right price!');
            }
        } else if (filter.min) {
            let checkedArr = data.data.filter(product => {
                return Number(filter.min) < product.real_price;
            });
            if (checkedArr.length > 0) priceFilter.push(...checkedArr);

        } else if (filter.max) {
            let checkedArr = data.data.filter(product => {
                return Number(filter.max) > product.real_price;
            });
            if (checkedArr.length > 0) priceFilter.push(...checkedArr);
        }
        let allFilter = [...new Set([...brandsFilter, ...rateFilter, ...priceFilter])];
        if (allFilter.length > 0) {
            dispatch({
                type: 'FILTER_PRODUCTS',
                payload: allFilter
            });
        } else {
            navigate('/notfound');
        }
    };
    if (products.length === 0) {
        return (
            <>
                <div className='allProducts container-fluid'>
                    <Direction backContent='Home Page' currentLink='/allProducts' currentContent='All Products' />
                    <div className='allProducts__head'>
                        <h2>All Products</h2>
                        <div className='allProducts__head--display'>
                            <div className='displayGroup'>
                                <GridIcon />
                                <p>Grid view</p>
                            </div>
                            <div className='displayGroup'>
                                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                                <p>List view</p>
                            </div>
                        </div>
                    </div>
                    <div className='allProducts__collections'>
                        <div className='left'>
                            <div className='filter__group'>
                                <h4>Brands</h4>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>Iphone</div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>Samsung</div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>Oppo</div>
                                </label>
                            </div>
                            <div className='filter__group'>
                                <h4>Rating</h4>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </label>
                                <label>
                                    <input type='checkbox' />
                                    <div className='label'>
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                        <StarIcon />
                                    </div>
                                </label>
                            </div>
                            <div className='filter__group'>
                                <h4>Price</h4>
                                <div className='filter__group--price'>
                                    <label>
                                        <div className='label'>Min</div>
                                        <input type='number' />
                                    </label>
                                    <label>
                                        <div className='label'>Max</div>
                                        <input type='number' />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            {[...Array(15)].map(item => {
                                return <LoadingProduct />;
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='allProducts container-fluid'>
                <Direction backContent='Home Page' currentLink='/allProducts' currentContent='All Products' />
                <div className='allProducts__head'>
                    <h2>All Products</h2>
                    <div className='allProducts__head--display'>
                        <div className='displayGroup active'>
                            <GridIcon />
                            <p>Grid view</p>
                        </div>
                        <div className='displayGroup'>
                            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                            <p>List view</p>
                        </div>
                    </div>
                </div>
                <div className='allProducts__collections'>
                    <div className='left'>
                        <div className='filter__group'>
                            <h4>Brands</h4>
                            <label >
                                <input type='checkbox' value='iphone' onChange={handleFilterCheck('brands')} />
                                <div className='label'>Iphone</div>
                            </label>
                            <label>
                                <input type='checkbox' value='samsung' onChange={handleFilterCheck('brands')} />
                                <div className='label'>Samsung</div>
                            </label>
                            <label>
                                <input type='checkbox' value='oppo' onChange={handleFilterCheck('brands')} />
                                <div className='label'>Oppo</div>
                            </label>
                        </div>
                        <div className='filter__group --rate'>
                            <h4>Rating</h4>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='5' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='4' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='3' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='2' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='1' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                            <label>
                                <input type='checkbox' onChange={handleFilterCheck('rate')} value='0' />
                                <div className='label'>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <StarIcon />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className='filter__group'>
                            <h4>Price</h4>
                            <div className='filter__group--price'>
                                <label>
                                    <div className='label'>Min</div>
                                    <input type='number' onChange={handleFilterType('min')} />
                                </label>
                                <label>
                                    <div className='label'>Max</div>
                                    <input type='number' onChange={handleFilterType('max')} />
                                </label>
                            </div>
                        </div>
                        <Button color='white' round='round' onClick={handleApplyFilter}>Apply</Button>
                    </div>
                    <div className='right'>
                        {products.map(product => {
                            return <CardContent key={product.id} handleOrder={handleOrder} _id={product?._id} id={product?.id} title={product?.name} content={product?.short_description} price={product?.real_price?.toLocaleString() + 'VND'} src={product?.thumbnail_url}
                                rate={Math.round(product?.rating_average)}
                            />;
                        })}
                    </div>
                </div>
                <div className='allProducts__paginate'>
                    <Paginate totalPage={10} />
                </div>
            </div>
        </>
    );
};
