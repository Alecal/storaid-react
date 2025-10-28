import React from 'react'

function ButtonStandard({ children, mode ='dark' }) {
    const buttonHover = 'buttonHover'; 
    const buttonHoverLight = 'buttonHoverLight';
    const hoverClass = mode === 'dark' ? buttonHover : buttonHoverLight;

    return (
        <button className={`px-7 py-2 bg-primary rounded-md btn-yellow transition duration-200 ease-in-out ${hoverClass}`}>
            {children ? children : 'Button'}
        </button>
    )
}

export default ButtonStandard