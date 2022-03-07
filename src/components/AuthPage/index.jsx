import React from 'react';
import Button from '../Button';
import './style.scss';
export default function AuthPage({ children, title, backPath, goPath, handle, buttonName }) {
    return (
        <div div className='authPage' >
            <div className='authPage__wrapper'>
                <div className='authPage__wrapper--left'>
                    <h2>{title}</h2>
                    <form>
                        {children}
                    </form>
                    <Button onClick={handle} color='white' round='round' border='green' size='large' path={goPath}>{buttonName}</Button>
                </div>
                <div className='authPage__wrapper--right'>
                    <h4>Do you want to go back?</h4>
                    <Button color='white' positionIcon='right' round='round' border='green' size='medium' path={backPath}>Back</Button>
                </div>
            </div>
        </div >
    );
}
