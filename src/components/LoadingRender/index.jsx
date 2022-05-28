import React from 'react';
import './style.scss';
export default function LoadingRender() {
    return (
        <div className="loadingRender">
            <div className="loadingRender__wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
}
