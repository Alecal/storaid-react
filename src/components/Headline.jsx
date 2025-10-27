import React from 'react'

function Headline({ children, title, size, color }) {
    const HeadingTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size) ? size : 'h1';

    const headingClasses = `leading-tight mb-5 ${color}`;

    return (
        <div className='w-full mb-5'>
            {title && <p className="text-primary-bold mb-2">{title}</p>}
        <HeadingTag className={headingClasses}>{children}</HeadingTag>
        </div>
    )
}

export default Headline