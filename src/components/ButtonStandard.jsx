import React from 'react';
import { Link } from 'react-router-dom';

function ButtonStandard({ children, mode = 'dark', className = '', type = 'button', to = '' }) {
    const buttonHover = 'buttonHover'; 
    const buttonHoverLight = 'buttonHoverLight';
    const hoverClass = mode === 'dark' ? buttonHover : buttonHoverLight;

    const button = (
        <button 
            type={type} 
            className={`px-7 py-2 bg-primary rounded-md btn-yellow transition duration-200 ease-in-out ${hoverClass} ${className}`}
        >
            {children ? children : 'Button'}
        </button>
    );

    if (to) {
        return (
            <Link to={to}>
                {button}
            </Link>
        );
    }
    return button;
}

export default ButtonStandard;