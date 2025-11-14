import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ item }) => {

    const created = new Date(item.created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const generateSlug = (text) => {
        if (!text) return '';
        
        // Get everything before the colon (or full text if no colon)
        const beforeColon = text.split(':')[0];
        
        return beforeColon
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
    }

    const truncateText = (text) => {
        const maxLength = 150;
        if (!text || text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return (
    <article className='blogCard drop-shadow-xl/25 flex-1 text-white p-5 pb-10 group transition duration-500 ease-in-out transform hover:scale-105 motion-reduce:transform-none'>
        <div className='blogCardImage w-auto h-60 mb-5'><img className='w-full h-full object-cover' src={item.imageUrl} alt={item.imageAlt || `${item.title} featured image`} loading="lazy" width="400" height="240"/></div>
        <time className='blogCard-small-text mb-5 block' dateTime={item.created}><FontAwesomeIcon className='mr-2' icon={faCalendarDays} aria-hidden="true"/>{created}</time>
        <h3 className='mb-5'>{item.title}</h3>
        <p className='blogCard-small-text mb-5'>{truncateText(item.description)}</p>
        <a href={`/blog/${generateSlug(item.title)}`} className='inline-flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent' aria-label={`Read more about ${item.title}`}>Read more <FontAwesomeIcon icon={faArrowRight} aria-hidden="true"/></a>
    </article>
    )
}

export default BlogCard;