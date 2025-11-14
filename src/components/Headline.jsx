import React from 'react'

function Headline({ children, title, size, color = '', titleClass = 'text-primary-bold', titleMargin = 'mb-5', contrast = false}) {
    const HeadingTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size) ? size : 'h1';

    const headingClasses = `leading-tight ${titleMargin} ${color}`;
        const titleClasses = contrast 
        ? `${titleClass} titleContrast text-primary px-4 py-1.5 rounded-md inline-block`
        : titleClass;

    return (
        <div className={`w-full ${titleMargin}`}>
            {title && <span className={`mb-2 ${titleClasses}`}>{title}</span>}
        <HeadingTag className={headingClasses}>{children}</HeadingTag>
        </div>
    )
}

export default Headline