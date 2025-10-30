import React from 'react'

function Headline({ children, title, size, color = '', titleClass = 'text-primary-bold', titleMargin = 'mb-5' }) {
    const HeadingTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size) ? size : 'h1';

    const headingClasses = `leading-tight ${titleMargin} ${color}`;

    return (
        <div className={`w-full ${titleMargin}`}>
            {title && <p className={`mb-2 ${titleClass}`}>{title}</p>}
        <HeadingTag className={headingClasses}>{children}</HeadingTag>
        </div>
    )
}

export default Headline