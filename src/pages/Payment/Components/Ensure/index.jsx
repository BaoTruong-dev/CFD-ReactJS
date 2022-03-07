import React from 'react';
import { EnsureIcon } from '../../../../svgs';
import './style.scss';
export default function Ensure() {
    return (
        <div className='ensure'>
            <div className='ensure__svg'>
                <EnsureIcon />
            </div>
            <p className="ensure__affirmation">All your data are safe</p>
            <p className='ensure__explain'>
                We are using the most advanced security to provide you the best experience ever.
            </p>
        </div>
    );
}
