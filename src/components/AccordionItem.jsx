import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AccordionItem({ children, title, isOpen, onToggle, id, ariaControls }) {
  return (
    <>
      <h3 style={{ fontSize: '1.1rem' }}>
        <button 
          id={id}
          onClick={onToggle} 
          aria-expanded={isOpen}
          aria-controls={ariaControls}
          className={`${isOpen ? 'accordionActive' : 'accordion'} relative rounded-md px-5 py-3 cursor-pointer w-full text-left`}
        >
          <span className='text-bold-acc'>{title}</span>
          <span className='absolute right-5 top-1/2 -translate-y-1/2' aria-hidden="true">
            <FontAwesomeIcon className={isOpen ? '' : 'rotate-180'} icon={faChevronUp}/>
          </span>
        </button>
      </h3>

      <div 
        id={ariaControls}
        role="region"
        aria-labelledby={id}
        aria-hidden={!isOpen}
        className={`${isOpen ? 'accordionItemOpen' : 'accordionItemClosed'}`}
      >
        <p>{children}</p>
      </div>
    </>
  );
}

export default AccordionItem;