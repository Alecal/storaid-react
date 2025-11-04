import React from 'react';
import { Link } from 'react-router-dom';

function ButtonStandard({ children, mode = 'dark', className = '', type = 'button', to = '', onClick='', width =''}) {
    const buttonHover = 'buttonHover'; 
    const buttonHoverLight = 'buttonHoverLight';
    const hoverClass = mode === 'dark' ? buttonHover : buttonHoverLight;

      switch (width) {
      case 'small':
        width = 'px-2 py-2';
        break;
      case 'medium':
        width = 'px-4 py-2';
        break;
      case 'large':
        width = 'px-12 py-2';
        break;
      default:
        width = 'px-7 py-2';
    }

    const button = (
        <button
            {...(onClick && { onClick })}
            type={type} 
            className={`${width} bg-primary rounded-md btn-yellow transition duration-200 ease-in-out ${hoverClass} ${className}`}
        >
            {children ? children : 'Button'}
        </button>
    );

    if (to) {
        return <Link to={to}>{button}</Link>;
    }
    return button;
}

export default ButtonStandard;