import React from 'react';
import './style.scss';
export default function DeliMethod({ id, label, fee, brand, error, ...rest }) {
    return (
        <div className='deliMethod'>
            <div className='deliMethod__container'>
                <div className='deliMethod__container--wrapper'>
                    <div className='deliMethod__container--wrapper--input'>
                        <input type='radio' id={id} {...rest} />
                        <label htmlFor={id}>{label}</label>
                    </div>
                    {fee &&
                        <div className='deliMethod__container--wrapper--price'>
                            <p>
                                {fee}
                            </p>
                            <p>
                                Additional price
                            </p>
                        </div>
                    }
                </div>
                <div className='deliMethod__container--brand'>
                    {brand}
                </div>
            </div>
        </div>
    );
}
