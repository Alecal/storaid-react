import React from 'react'

function ButtonStandard({ children, mode ='dark', className = '', type ='button'}) {
    const buttonHover = 'buttonHover'; 
    const buttonHoverLight = 'buttonHoverLight';
    const hoverClass = mode === 'dark' ? buttonHover : buttonHoverLight;

    return (
        <button type={type} className={`px-7 py-2 bg-primary rounded-md btn-yellow transition duration-200 ease-in-out ${hoverClass}`}>
            {children ? children : 'Button'}
        </button>
    )
}

export default ButtonStandard