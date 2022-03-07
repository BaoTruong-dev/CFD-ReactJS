import React, { useRef } from 'react';
import Quote from '../../../../components/Quote';
import { usersQuote } from '../../../../constant';
import { ArrowLeft, ArrowRight } from '../../../../svgs';
import Flickity from 'react-flickity-component';
import './style.scss';
export default function CustomersQuote() {
    let quoteSlider = useRef();
    let flkty = new Flickity('.customersQuote__wrapper--slider');
    let flickityOptions = {
        groupCells: true,
        wrapAround: true,
        prevNextButtons: true,
        // pageDots: false,
    };
    let handleNext = () => {
        console.log(flkty);
    };
    return (
        <div className='customersQuote'>
            <h3 className='container-fluid'>Our customers say</h3>
            <div className='customersQuote__wrapper' ref={quoteSlider}>
                <Flickity options={flickityOptions} elementType={'div'} className={'customersQuote__wrapper--slider'}>
                    {usersQuote.map(user => <Quote key={user.user} content={user.content} name={user.name} src={user.img} />)}
                </Flickity>
                <div className='prev'><ArrowLeft /></div>
                <div className='next' onClick={handleNext}><ArrowRight /></div>
            </div>
        </div >
    );
}
