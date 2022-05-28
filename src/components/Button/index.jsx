import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '../../svgs';
import './style.scss';


export default function Button({ children, color, size, background, border, round, positionIcon, onClick, path = '', id, ...rest }) {
    return (
        <Link to={id ? `${path}?id=${id}` : `${path}`} className={`button ${positionIcon ? 'icon' : ''} color-${color} size-${size} border-${border} background-${background} ${round}`} onClick={onClick} {...rest}>
            <div className='button__wrapper'>
                {positionIcon === 'left' && <div><ArrowLeft /></div>}
                <span>{children}</span>
                {positionIcon === 'right' && <div><ArrowRight /></div>}
            </div>
        </Link >
    );
}
;
