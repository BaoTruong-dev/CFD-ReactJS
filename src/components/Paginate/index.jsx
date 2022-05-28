import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import url from '../../utilities/url';
export default function Paginate({ totalPage = 0 }) {
    const queryObj = url.queryObject({ page: 1 });
    queryObj.page = Number(queryObj.page);
    const renderPaginate = () => {
        let start = queryObj.page - 2;
        let end = queryObj.page + 2;
        let paginateArr = [];
        if (start < 1) {
            start = 1;
            end = 5;
        }
        if (end > totalPage) {
            start -= 2;
            end = totalPage;
        }
        for (let i = start; i <= end; i++) {
            paginateArr.push(
                <Link to={`?${url.queryString({ page: i })}`} className={queryObj.page === i ? 'active' : ''}>{i}</Link>
            );
        }
        return paginateArr;
    };
    return (
        <>
            <div className='paginate'>
                <div className='paginate__arrow'>
                    {queryObj.page === 1 ? '' : <Link to={`?${url.queryString({ page: queryObj.page - 1 })}`}><FontAwesomeIcon icon={faArrowLeft} /></Link>}
                </div>
                {renderPaginate()}
                {/* <Link to className='active'>1</Link>
                <Link to>2</Link>
                <Link to>3</Link>
                <Link to>4</Link>
                <Link to>5</Link> */}
                <div className='paginate__arrow'>
                    {queryObj.page === totalPage ? '' : <Link to={`?${url.queryString({ page: queryObj.page + 1 })}`}><FontAwesomeIcon icon={faArrowRight} /></Link>}
                </div>
            </div>
        </>
    );
}
