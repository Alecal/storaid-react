import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ item }) => {

    const created = new Date(item.created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const truncateText = (text) => {
        const maxLength = 150;
        if (!text || text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
        };

    return (
    <div className='blogCard flex-1 text-white p-5 pb-10 group transition duration-500 ease-in-out transform hover:scale-105'>
        <div className='blogCardImage w-auto h-60 mb-5'><img className='w-full h-full object-cover' src={item.imageUrl}/></div>
        <p className='blogCard-small-text mb-5'><FontAwesomeIcon className='mr-2' icon={faCalendarDays} />{created}</p>
        <h6 className='mb-5'>{item.title}</h6>
        <p className='blogCard-small-text mb-5'>{truncateText(item.description)}</p>
        <a href='' className=''>Read more <FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
    )
}

export default BlogCard;