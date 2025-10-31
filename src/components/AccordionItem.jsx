import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AccordionItem({ children, title, isOpen, onToggle }) {
  return (
    <>
      <div onClick={onToggle} className={`${isOpen ? 'accordionActive' : 'accordion'} relative rounded-md px-5 py-3 cursor-pointer`}>
        <p className='text-bold-acc'>{title}</p>
        <div className='absolute right-5 top-1/2 -translate-y-1/2'>
          <FontAwesomeIcon className={isOpen ? '' : 'rotate-180'} icon={faChevronUp}/>
        </div>
      </div>

      <div className={`${isOpen ? 'accordionItemOpen' : 'accordionItemClosed'}`}>
        <p>{children}</p>
      </div>
    </>
  );
}

export default AccordionItem;
